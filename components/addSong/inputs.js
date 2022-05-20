import { useDispatch } from "react-redux";


const SongInput = () => {

    const dis = useDispatch()

    return (
      <div className="flex flex-col justify-center items-center gap-y-3">
        <input
          className="text-center h-24 w-[30vw] bg-transparent border-solid border-[#016F7E] border-[6px] rounded-[2rem] text-white outline-none "
          type="text"
          placeholder="paste url like: https://siba..."
        />
        <button
          className="text-center h-24 w-[30vw] bg-[#016F7E] rounded-[2rem] text-white text-4xl font-extrabold "
          type="text"
          placeholder="paste url like: https://siba..."
        >
          Add to PlayList
        </button>
      </div>
    );

}

export default SongInput;