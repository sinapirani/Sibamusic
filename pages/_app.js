import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store'
import { useEffect, useRef, useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  const music = useRef( typeof Audio != 'undefined' ? new Audio() : false )
  const [src, setThisSrc] = useState();
  const [context, setThisContext] = useState()
  const [analyser, setThisAnalyser] = useState()

  const setSrc = (src) => {
    setThisSrc(src);
  };

  const setContext = (context) => {
    setThisContext(context)
  }

  const setAnalyser = (analyser) => {
    setThisAnalyser(analyser)
  } 
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
        setSrc={setSrc}
        src={src}
        context={context}
        setContext={setContext}
        analyser={analyser}
        setAnalyser={setAnalyser}
      />
    </Provider>
  );
}

export default MyApp
