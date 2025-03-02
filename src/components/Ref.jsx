import {useRef} from 'react'

export default function Ref()
{
    const inputRef = useRef(null)

    const handleClick = () =>
    {
        inputRef.current.focus()
    }
    
    return (
        <>
            <input onClick={handleClick}ref={inputRef}style={{outline: '5px solid black'}}></input>
            <label>Label</label>
        </>
    )
}