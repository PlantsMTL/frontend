import Navbar from 'components/Navbar';
import './styles.css';

import { ReactComponent as PhotoIcon } from 'assets/images/photo-icon.svg';
import PlantCard from 'pages/components/PlantCard';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className='dashboard-upcontent'>
                <h1>Plants List</h1>
                <PhotoIcon />
            </div>
            <div className='dashboard-listcontent'>
                <PlantCard />

            </div>

            <div className='dashboard-navbar-bottom'>
                <Navbar />
            </div>

        </div>
    );
};
export default Dashboard;