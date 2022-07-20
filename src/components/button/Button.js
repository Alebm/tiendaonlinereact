import './Button.css'

const Button = (props) =>{
    return <button onClick={props.click} className='button' style={{color: props.color}} >{props.label}</button>
}

export default Button;