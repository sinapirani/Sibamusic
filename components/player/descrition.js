
const PlayerDescription = ({data}) => {
    return (
      <p className=" w-full text-white text-xl">
        {data?.common?.albumartist || data?.common?.artist}
      </p>
    );
}

export default PlayerDescription