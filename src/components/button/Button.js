import './Button.css'

const Button = ({click, color, label}) =>{
    return <button onClick={click} className='button' style={{color: color}} >{label}</button>
}

export default Button;