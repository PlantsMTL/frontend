import './styles.scss';
import { ReactComponent as FaceIcon } from 'assets/images/facebook-icon.svg';
import { ReactComponent as GithubIcon } from 'assets/images/github-icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/google-icon.svg';


type Icons = 'Facebook' | 'Google' | 'Github';

const getIconFromName = (iconName: Icons) => {
    switch (iconName) {
        case 'Facebook':
            return <FaceIcon />;
        case 'Github':
            return <GithubIcon />;
        case 'Google':
            return <GoogleIcon />;
    }
}

const ImgButtonIcon = ({ iconName }: { iconName: Icons }) => {

    const icon = getIconFromName(iconName);
    const buttonClass = `btn btn-primary ${iconName === 'Facebook' ? 'background-facebook' : ''} ${iconName === 'Google' ? 'background-google' : ''} ${iconName === 'Github' ? 'background-github' : ''} btn-icon-content`;

    return (
        <div className='default-button'>
            <button className={buttonClass}>
                <h5>{iconName}</h5>
            </button>
            <div className="btn-icon-img">
                {icon}
            </div>
        </div>
    );
}

export default ImgButtonIcon;