import React, { useEffect, useState } from 'react'


const localCache = {};

export const useFetch = (url) => {

  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFetch();
  }, [url])
  

  const getFetch = async() =>{
    if(localCache[url]){
      console.log('Usando cache..');
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      });
      return
    }
    const resp = await fetch(url);
    //sleep
    // await new Promise( resolve => setTimeout(resolve, 1500) );

    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      })
      return
    }


    const data = await resp.json();
    setstate({
      data,
      isLoading: false,
      hasError: false,
      error: null
    })

    /* Manejo del cache */
    localCache[url] = data;
  }

  return {
    ...state
  }
}
