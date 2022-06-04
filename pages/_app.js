import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store'
import { useEffect, useRef, useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  const music = useRef()
  // const [timeOfMusic, setTimeOfMusic] = useState(0)


  // const updated = () => {
  //   setTimeOfMusic((100 * music.current.currentTime) / music.current.duration );
  //   console.log('time', timeOfMusic);
  // }

  // const changeTime = (value) => {
  //   setTimeOfMusic(value)
  // }

  return (
    <Provider store={store}>
      <audio ref={music} className="hidden"></audio>
      <Component
        {...pageProps}
        music={music}
      />
    </Provider>
  );
}

export default MyApp
