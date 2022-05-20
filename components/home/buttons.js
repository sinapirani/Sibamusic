import style from '../../styles/Home.module.css'
import Link from 'next/link'

const HomeButton = () => {

    return (
      <div className={` ${style.button} flex flex-col gap-y-2 justify-center items-center`}>
        <Link href={'/addSong'}>
          <button className={` ${style.buttonEl} w-[22rem] h-28 bg-white text-[#182729] text-5xl font-extrabold rounded-2xl `}>
            Play Now
          </button>        
        </Link>
        <p className={` cursor-pointer`}>Login to your account</p>
      </div>
    );
}

export default HomeButton