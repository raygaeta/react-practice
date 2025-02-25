export default function Synced({label, text, onChange})
{
    return (
        <>
        {label}
            <input style={{outline: '10px solid black'}} value={text} onChange={onChange}/>
        </>
    )
}