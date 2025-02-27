import { useRef } from "react";

export default function Ref()
{
    const buttonRef = useRef(null);

    const handleClick = () =>
    {
        buttonRef.current.style.backgroundColor = 'red';
    }

    return (
        <button onClick={handleClick} ref={buttonRef} style={{outline: '5px solid black', backgroundColor: 'teal', padding: '10px', borderRadius: '5px'}}>
            Click me
        </button>
    )
}