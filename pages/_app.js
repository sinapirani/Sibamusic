import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store'
import { useEffect, useRef, useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  const music = useRef()

  return (
    <Provider store={store}>
      <audio ref={music} className='hidden' ></audio>
      <Component {...pageProps} music={music} />
    </Provider>
  );
}

export default MyApp
