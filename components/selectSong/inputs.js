import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ADD_SONG, DEL_SONG} from '../../redux/songSlice'
import {useRouter} from 'next/router'
import * as musicMetaData from 'music-metadata-browser'
import { arrayBufferToBlob } from "blob-util";
import { IS_PLAYING } from "../../redux/playSlice";
import { useTag } from "../../hooks/useTag";
 

const SelectInput = ({music}) => {

    const dis = useDispatch()
    const songList = useSelector(state => state.songSlice.songs)
    const [data, setData] = useState()
    const [errMs, setErrMs] = useState('')
    const input = useRef(null)
    const router = useRouter()
    const tag = useTag()

    const inputChange = (e) => {
      setData(e.target.files[0])
    }

    useEffect(()=>{
      if(data && music.current){
        tag(data,music)
      }
    },[data, music])


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
        <p className=" text-red-500">{errMs}</p>
      </div>
    );

}

export default SelectInput;