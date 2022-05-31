import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import songSlice, {ADD_SONG} from '../../redux/songSlice'
import {useRouter} from 'next/router'
import * as musicMetaData from 'music-metadata-browser'
import { arrayBufferToBlob } from "blob-util";
 

const SelectInput = () => {

    const dis = useDispatch()
    const songList = useSelector(state => state.songSlice.songs)
    const [data, setData] = useState()
    const [errMs, setErrMs] = useState('')
    const input = useRef(null)
    const router = useRouter()

    const inputChange = (e) => {
      setData(e.target.files[0])
    }

    useEffect(()=>{
      if(data){
        const reader = new FileReader();
        reader.readAsArrayBuffer(data)
        reader.onload = () => {
          const buffer = reader.result;
          console.log(buffer);
          const type = data.type;
          const blob = arrayBufferToBlob(buffer, type);

          musicMetaData.parseBlob(blob).then((metadata) => {
            dis(ADD_SONG(JSON.stringify(metadata)));
            setErrMs('end')
            router.push('/player')
          });
        }
      }
    },[data])


    const err = () => {
      setErrMs('please insert a valid url!')
    }



    return (
      <div className="flex flex-col justify-center items-center gap-y-3">
        <input
          accept=".mp3,audio/*"
          className="hidden"
          id="input"
          type="file"
          ref={input}
          onChange={inputChange}
        />

        <label
          htmlFor="input"
          className=" flex justify-center items-center text-center h-24 w-[30vw] bg-[#016F7E] rounded-[2rem] text-white text-4xl font-extrabold outline-none "
        >
          Click to select
        </label>

        {/* <button
          className={`text-center h-24 w-[30vw] ${data ? 'bg-[#016F7E] text-white ' : 'bg-[#002328] text-[#434343] cursor-not-allowed'} rounded-[2rem]  text-4xl font-extrabold `}
          type="text"
          placeholder="paste url like: https://siba..."
          // onClick={add}
        >
          Add to PlayList
        </button> */}

        <p className=" text-red-500">{errMs}</p>
      </div>
    );

}

export default SelectInput;