
import SongText from "../../components/addSong/text";
import SelectInput from "../../components/selectSong/inputs";


const AddSong = () => {

    return (
      <div className={` flex justify-center items-center relative h-screen w-full bg-[#151515] overflow-hidden`}>
        <div style={{"backfaceVisibility": 'hidden'}} className=" left-96 absolute h-[80vw] w-[80vw] rounded-full bg-[#016F7E] opacity-[13%] blur-[200px]"></div>


        <div className=" w-full z-50 flex justify-evenly items-center ">
            <SongText/>
            <SelectInput/>
        </div>

      </div>
    );

}


export const getStaticProps = async() => {
    return{
        props:{
            
        }
    }
}


export default AddSong