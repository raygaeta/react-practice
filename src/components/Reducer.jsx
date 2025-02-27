import {useReducer} from 'react'

const countReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'increment' :
            {
                return state + 1    
            }
        case 'decrement' :
            {
                return state - 1
            }
        case 'reset' :
            {
                return 0
            }
    }
}
export default function Reducer() 
{
    const [count, dispatch] = useReducer(countReducer, 0)

    return (
        <div className='flex flex-col items-center gap-4'>
            <h1><b>Reducer</b></h1>
            <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
            <button onClick={()=> dispatch({type : 'decrement'})}>Decrement</button>
            <button onClick={()=> dispatch({ type: 'reset'})}>Reset</button>
            {count}
        </div>
    )
}