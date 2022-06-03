import { ADD_SONG, DEL_SONG } from "../redux/songSlice";
import { arrayBufferToBlob } from "blob-util";
import * as musicMetaData from "music-metadata-browser";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";


export const useTag = (data, music) => {

    const dis = useDispatch()
    const router = useRouter()

    const dispatchTags = (data, music) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(data);
        reader.onload = () => {
          const buffer = reader.result;
          console.log(buffer);
          const type = data.type;
          const blob = arrayBufferToBlob(buffer, type);

          musicMetaData.parseBlob(blob).then((metadata) => {
            dis(DEL_SONG());
            const blob = new Blob([buffer], { type: "audio/wav" });
            const url = window.URL.createObjectURL(blob);
            music.current.src = url;
            music.current.play();
            dis(ADD_SONG({ meta: JSON.stringify(metadata) }));
            router.push("/player");
          });
        };
    }
    return dispatchTags
}
