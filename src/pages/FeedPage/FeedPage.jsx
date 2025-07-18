import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePosts } from './hooks/usePosts.js';
import { useScrollMargin } from './hooks/useScrollMargin.js';

import TagPopup from '../../components/TagPopup.jsx';
import Navbar from '../../components/Navbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import Post from '../../components/Post.jsx';
import Map from '../../components/Map/Map.jsx';

import './styles/FeedPage.css';

const FeedPage = () => {
    const navigate = useNavigate();

    const posts = usePosts();
    const marginTop = useScrollMargin();
    const [showPopup, setShowPopup] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    useEffect(() => {
        if (posts.length > 0) {
            console.log('Posts carregados:', posts);
        }
    }, [posts]);

    const handleOptionClick = (option) => {
        const tagOptions = {
            "pet-perdido": "Pet perdido",
            "pet-localizado": "Pet localizado"
        };
        const tag = tagOptions[option];
        if (tag) {
            navigate(`/createPost/${option}`, { state: { tag } });
            setShowPopup(false);
        }
    };

    return (
        <div className="container">
            <div className="visible-navbar"> <Navbar /> </div> {/* essa navbar está com position: fixed, portanto não faz os elementos da página descerem */}
            <div className="occult-navbar"> <Navbar /> </div> {/* essa navbar está aqui para fazer com que os elementos da página desçam, ela não é visível */}
                
            <div className="page-info">
                <div className="sidebar-component">
                    <Sidebar
                        isCollapsed={isSidebarCollapsed}
                        setIsCollapsed={setIsSidebarCollapsed}
                        onCreatePost={() => setShowPopup(true)}
                    />
                </div>
                <div className={`feed ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            username="username"
                            timestamp={new Date(post.timestamp).toLocaleString()}
                            name={post.name}
                            age={post.age}
                            breed={post.breed}
                            sex={post.sex}
                            owner={post.owner}
                            date={post.date}
                            foundLost={post.foundLost}
                            extraDescription={post.extra}
                            imageUrl={post.image}
                            onMapClick={() => alert(`Abrir mapa em: ${post.location}`)}
                        />
                    ))}
                </div>
                <div
                    className="map-component"
                    style={{ marginTop: `${marginTop}rem` }}
                >
                    <Map expanded={false} markers={posts} />
                </div>
            </div>

            {showPopup && (
                <TagPopup
                    onOptionClick={handleOptionClick}
                    onCancel={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default FeedPage;