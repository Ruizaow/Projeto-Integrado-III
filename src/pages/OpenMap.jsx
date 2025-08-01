import { useState } from 'react';
import { usePosts } from './FeedPage/hooks/usePosts.js';
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Map from '../components/Map/Map.jsx'
import './styles/OpenMap.css';

const OpenMap = () => {
    const posts = usePosts();
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
                    <Map expanded={true} markers={posts} />
                </div>
            </div>
        </div>
    );
};

export default OpenMap;