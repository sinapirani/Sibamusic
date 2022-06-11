import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import { useTag } from "../../hooks/useTag";
 

const SelectInput = ({music, setSrc, setContext, setAnalyser}) => {

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
        setAnalyser(false)
        setContext(false)
        setSrc(false)
        tag(data,music)
      }
    },[data, music])


    const err = () => {
      setErrMs('please insert a valid url!')
    }

    const goToPlayer = () => {
      if(music.current?.duration){
        router.push('/player')
      }else{
        setErrMs('select a song first!')
      }
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

        <button onClick={goToPlayer} className=" flex justify-center items-center text-center h-24 w-[30vw] bg-[#016F7E] rounded-[2rem] text-white text-4xl font-extrabold outline-none ">
          Go to Player
        </button>

        <p className=" text-red-500">{errMs}</p>
      </div>
    );

}

export default SelectInput;