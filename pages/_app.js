import '../styles/globals.css'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from '../redux/store'
import { useEffect, useRef, useState } from 'react';
import { IS_PLAYING } from '../redux/playSlice';

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
