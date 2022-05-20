import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {ADD_SONG} from '../../redux/songSlice'
import {useRouter} from 'next/router'
import validUrl from 'valid-url'


const SongInput = () => {

    const dis = useDispatch()
    const [data, setData] = useState()
    const [errMs, setErrMs] = useState('')
    const input = useRef(null)
    const router = useRouter()

    const inputChange = (e) => {
      setData(e.target.value)
    }

    const err = () => {
      setErrMs('please insert a valid url!')
    }

    const add = () => {
      if(!validUrl.isUri(data)){
        err();
      }else{
          dis(ADD_SONG(data));
          router.push("/addCover");
      }

    }


    return (
      <div className="flex flex-col justify-center items-center gap-y-3">
        <input
          className="text-center h-24 w-[30vw] bg-transparent border-solid border-[#016F7E] border-[6px] rounded-[2rem] text-white outline-none "
          type="text"
          placeholder="paste url like: https://siba..."
          ref={input}
          onChange={inputChange}
        />
        <button
          className="text-center h-24 w-[30vw] bg-[#016F7E] rounded-[2rem] text-white text-4xl font-extrabold "
          type="text"
          placeholder="paste url like: https://siba..."
          onClick={add}
        >
          Add to PlayList
        </button>

        <p className=" text-red-500">{errMs}</p>

      </div>
    );

}

export default SongInput;