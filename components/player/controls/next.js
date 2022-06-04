/* eslint-disable @next/next/no-img-element */


const PlayerNext = ({music}) => {

    const clicked = () => {
        if(music?.current)
            music?.current.currentTime += 5
    }

    return(
        <img onCanPlay={clicked} src="/player/next.png" width={60} height={50} alt="next for 5 second" />
    )

}

export default PlayerNext