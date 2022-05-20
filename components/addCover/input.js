/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import getBase64 from "./getBase64";

const CoverInput = () => {
  const dis = useDispatch();
  const [data, setData] = useState();
  const [errMs, setErrMs] = useState("");
  const [src, setSrc] = useState(null)
  const input = useRef(null);
  const img = useRef()
  const router = useRouter();


  const imgPicked = (e) => {
    const [file] = e.target.files
    setSrc(URL.createObjectURL(file))
    console.log(getBase64(file));
  }


  return (
    <div className="flex flex-col justify-center items-center gap-y-3">

      {src ? <img ref={img} src={src} height={200} width={200} className='rounded-md border-4 border-[#016F7E]' alt="" /> : ''}

      <input onChange={imgPicked} type="file" id="file" className="hidden" />

      <label
        className=" flex justify-center  items-center h-24 w-[30vw] bg-[#016F7E] rounded-[2rem]
      text-white text-4xl font-extrabold "
        htmlFor="file"
      >
        Add Cover
      </label>

      <p className=" text-red-500">{errMs}</p>
    </div>
  );
};

export default CoverInput;
