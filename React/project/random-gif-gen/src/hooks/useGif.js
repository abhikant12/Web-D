import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


function useGif(tag){                                            // this is custom hook with three variable or return;

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

  
    async function fetchData(tag) {

      setLoading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url);             // if tag is not empty let tag = car then url is like 'https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=car'
      const imageSource = data.data.images.downsized_large.url;                   //extracting gif from data means gif is present in (data -> image -> downsized_large -> url -> gif)
      setGif(imageSource);                                                        // we know that by printing data in console and check where is gif present;
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData('salmon bhoi');
    },[] )

    return {gif,loading, fetchData};
}

export default useGif
