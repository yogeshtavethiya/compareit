import React, { useEffect, useRef } from 'react'

const Home = () => {

  const btn1Ref = useRef<HTMLButtonElement | null>(null);
  const btn2Ref = useRef<HTMLButtonElement | null>(null);

  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if(e.key === 'ArrowLeft' && btn1Ref.current) {
        btn1Ref.current.focus()
      } else if(e.key === 'ArrowRight' && btn2Ref.current) {
        btn2Ref.current.focus()
      } else if(e.key === "Enter"){
        document.activeElement?.dispatchEvent(new MouseEvent('click', {bubbles: true}))
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  },[])

  

  return (
    <div onClick={() => console.log('bubbled')}>
      <button ref={btn1Ref} onClick={() => console.log("Button 1 Clicked!")}>btn 1</button>
      <button ref={btn2Ref} onClick={() => console.log("Button 2 Clicked!")}>btn 2</button>
    </div>
  )
}

export default Home