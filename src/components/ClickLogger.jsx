import React,{useState,useRef} from 'react'

export const ClickLogger = () => {
    const clickCount=useRef(0)
    const [text,setText]=useState('버튼이 0번 클릭됨')
    const handleClick=()=>{
        clickCount.current+=1
        setText(`버튼이 ${clickCount.current}번 클릭됨`)
    }
    return (
        <div>
            <p>{text}</p>   
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}
