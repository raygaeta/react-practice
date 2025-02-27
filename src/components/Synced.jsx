export default function Synced({label, text, onChange})
{
    return (
        <>
        <h1><b>Synced by Lifting State Up</b></h1>
        {label}
            <input style={{outline: '10px solid black'}} value={text} onChange={onChange}/>
        </>
    )
}