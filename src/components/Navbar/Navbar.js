import './Navbar.css'
import '../button/Button.js'
import Button from '../button/Button.js';

const Navbar = () => {

    const text = 'hice click'

    const handleClick = () =>{
        console.log(text)
    }


    return(
            <nav className="Navbar">
                <div>
                    <p>Shop OnLine</p>
                </div>
                <div>
                    <Button click={handleClick} label='Outlets' color = 'blue' />
                </div>
                <div>
                    <Button click={handleClick} label='News' color='red'/>
                </div>
                <div>
                    <Button click={handleClick} label='Collections' color='yellow' />
                </div>
            </nav>
    )
}

export default Navbar;