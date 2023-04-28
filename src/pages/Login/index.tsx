
import { ReactComponent as MainImage } from 'assets/images/login-plant.svg';
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
                        <LoginIconUser className='image-user' />
                        <input name='username' className='base-input' placeholder='Username' />
                        <LoginIconPass className='image-pass' />
                        <input name='password' className='base-input' placeholder='Password' />
                    </div>
                    <div className='btn-content'>
                        <SingleButton text={"Go"} />
                    </div>
                    <div className='home-content-division'>
                        <div className='home-content-line'></div>
                        <div className='home-content-text'>Or</div>
                        <div className='home-content-line'></div>
                    </div>
                    <div className="home-content-networks">
                        <ImgButtonIcon iconName='Facebook' />
                        <ImgButtonIcon iconName='Google' />
                        <ImgButtonIcon iconName='Github' />

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;