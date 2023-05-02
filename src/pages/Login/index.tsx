
import { ReactComponent as MainImage } from 'assets/images/plant-icon.svg';
import { ReactComponent as LoginIconUser } from 'assets/images/login-input-username.svg';
import { ReactComponent as LoginIconPass } from 'assets/images/login-input-password.svg';
import './styles.css';
import SingleButton from 'components/SingleButton';
import ImgButtonIcon from 'components/ImgButtonIcon';

const Login = () => {
    return (
        <div className="home-container">
            <div className="home-image">
                <MainImage />
            </div>
            <div className="home-card base-card">
                <div className="home-content-container">
                    <h1>Sign In</h1>
                    <div className='login-form'>
                        <form>
                            <LoginIconUser className='image-user' />
                            <input type='email' name='username' className='base-input' placeholder='Username' />
                            <LoginIconPass className='image-pass' />
                            <input type='password' name='password' className='base-input' placeholder='Password' />
                        </form>
                    </div>
                    <div className='btn-content'>
                        <SingleButton text={"Go"} />
                    </div>
                    <div className='home-content-division'>
                        <div className='home-content-line'></div>
                        <div className='home-content-text'><h4>Or</h4></div>
                        <div className='home-content-line'></div>
                    </div>
                    <div className="home-content-networks">
                        <ImgButtonIcon iconName='Facebook' />
                        <ImgButtonIcon iconName='Google' />
                        <ImgButtonIcon iconName='Github' />

                    </div>
                </div>
            </div>
        </div >

    );
}

export default Login;