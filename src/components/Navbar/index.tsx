import './styles.css';
import { ReactComponent as PlantIcon } from 'assets/images/plant-icon.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <div className='navbar-circle'>
                    <PlantIcon className='navbar-img' />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;