import './styles.css';
import { ReactComponent as PlantIcon } from 'assets/images/plant-icon.svg';
import { ReactComponent as CircleColorIcon } from 'assets/images/circle-color-icon.svg';
import { ReactComponent as HumidIcon } from 'assets/images/humid-icon.svg';
import { ReactComponent as TerrainIcon } from 'assets/images/terrain-icon.svg';
import { ReactComponent as SunIcon } from 'assets/images/sun-icon.svg';

const PlantCard = () => {
    return (
        <div className='base-card plant-card'>
            <div className='plantcard-top'>
                <CircleColorIcon />
            </div>
            <div className='plantcard-mid'>
                <div className='plantcard-img'>
                    <PlantIcon />
                </div>
                <div className='plantcard-infos'>
                    <div className='plantcard-lines'>
                        <HumidIcon />
                        <h6>53%</h6>
                    </div>
                    <div className='plantcard-lines'>
                        <TerrainIcon />
                        <h6>74%</h6>
                    </div>
                    <div className='plantcard-lines'>
                        <SunIcon />
                        <h6>3 h</h6>
                    </div>

                </div>
            </div>
            <div className='plantcard-botton'>
                <h4>Juh Suculenta</h4>

            </div>



        </div>
    );
};

export default PlantCard;