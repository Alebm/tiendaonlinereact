import Button from '../button/Button';
import { useState, useEffect } from 'react'


<<<<<<< HEAD
const Counter = ({stock, onAdd}) => {
=======
const Counter = () => {
>>>>>>> origin/main

useEffect(()=>{
});

<<<<<<< HEAD
    const [count, setCount] = useState(1);

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
=======
    const [count, setCount] = useState(0);
    let [text, setText] = useState('Text')

    const increment = () => {
        setCount(count + 1)
        setText( text = 'Incremento!!' )
    }

    const decrement = () => {
        setCount(count - 1)
        setText( text = 'Decremento!!' )
>>>>>>> origin/main
    }

    return (
        <div>
<<<<<<< HEAD
            <h1>{count}</h1>
            <Button click = {decrement} label = {'-'} />
            <Button click = {increment} label = {'+'} />
            <Button click = {()=> onAdd(count)} label = {'Agregar al 🛒'} />
=======
            <h1>{text === 'Incremento!!' ? 'Decremento!!' : 'Incremento!!'}</h1>
            <h1>{count}</h1>
            <Button click = {decrement} label = {'Decrement'} />
            <Button click = {increment} label = {'Increment'} />
>>>>>>> origin/main
        </div>
    )



}

export default Counter;