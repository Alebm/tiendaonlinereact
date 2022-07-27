import Button from '../button/Button';
import { useState, useEffect } from 'react'


const Counter = () => {

useEffect(()=>{
});

    const [count, setCount] = useState(0);
    let [text, setText] = useState('Text')

    const increment = () => {
        setCount(count + 1)
        setText( text = 'Incremento!!' )
    }

    const decrement = () => {
        setCount(count - 1)
        setText( text = 'Decremento!!' )
    }

    return (
        <div>
            <h1>{text === 'Incremento!!' ? 'Decremento!!' : 'Incremento!!'}</h1>
            <h1>{count}</h1>
            <Button click = {decrement} label = {'Decrement'} />
            <Button click = {increment} label = {'Increment'} />
        </div>
    )



}

export default Counter;