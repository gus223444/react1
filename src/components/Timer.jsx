import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isRunnig, setIsRunnig] = useState(false)
    const intervalRef = useRef(null)
    useEffect(() => {
        if (!isRunnig) {
            if(intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current=null
            }
            return
        }
        intervalRef.current = setInterval(() => {
            setSeconds((s) => s + 1)
        }, 1000)
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null
            }
        }
    }, [isRunnig])
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
    const ss = String(seconds % 60).padStart(2, '0')
    const start = () => setIsRunnig(true)
    const stop = () => setIsRunnig(false)
    const reset = () => setSeconds(0)
    return (
        <div>
            <p>{mm}:{ss}</p>
            <button onClick={start}>시작</button>
            <button onClick={stop}>중지</button>
            <button onClick={reset}>리셋</button>
        </div>
    )
}

export default Timer