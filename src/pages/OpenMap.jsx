import { useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Map from '../components/Map/Map.jsx'
import './styles/OpenMap.css';

const OpenMap = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    return (
        <div className="openMap-container">
            <Navbar />  
            <div className="page-info">
                <div className="sidebar-component">
                    <Sidebar
                        isCollapsed={isSidebarCollapsed}
                        setIsCollapsed={setIsSidebarCollapsed}
                    />
                </div>
                <div className="map-component">
                    <Map expanded={true} />
                </div>
            </div>
        </div>
    );
};

export default OpenMap;