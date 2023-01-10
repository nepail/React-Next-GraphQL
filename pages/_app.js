import {useEffect, useState} from 'react'
import '../styles/globals.css'
import '../styles/index.scss'

export default function App({ Component, pageProps }) {

  const[showChild, setShowChild] = useState(false)
  useEffect(()=>{
    setShowChild(true)
  }, [])

  if(!showChild){
    return null
  }
  return <Component {...pageProps} />
}
