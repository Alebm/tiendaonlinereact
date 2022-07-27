import Button from '../button/Button';
import { useState, useEffect } from 'react'



const Counter = ({stock, onAdd}) => {



useEffect(()=>{
});


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

    }

    return (
        <div>
            <h1>{count}</h1>
            <Button click = {decrement} label = {'-'} />
            <Button click = {increment} label = {'+'} />
            <Button click = {()=> onAdd(count)} label = {'Agregar al 🛒'} />
        </div>
    )



}

export default Counter;