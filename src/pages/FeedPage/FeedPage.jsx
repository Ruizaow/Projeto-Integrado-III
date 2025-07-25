import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePosts } from './hooks/usePosts.js';
import { useScrollMargin } from './hooks/useScrollMargin.js';

import SharePopup from '../../components/SharePopup/SharePopup.jsx';
import AuthPopup from '../../components/AuthPopup/AuthPopup.jsx';
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
    const [showTagPopup, setShowTagPopup] = useState(false);
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [selectedPostForShare, setSelectedPostForShare] = useState(null);

    const handleAddPostClick = (option) => {
        const tagOptions = {
            "pet-perdido": "Pet perdido",
            "pet-localizado": "Pet localizado"
        };
        const tag = tagOptions[option];
        if (tag) {
            navigate(`/createPost/${option}`, { state: { tag } });
            setShowTagPopup(false);
        }
    };

    return (
        <div className="container">
            <div className="visible-navbar">    {/* essa navbar está com 'position: fixed', portanto não faz os elementos da página descerem */}
                <Navbar
                    onProfileClick={() => setShowAuthPopup(true)}
                />
            </div>
            <div className="occult-navbar">     {/* essa navbar está aqui para fazer com que os elementos da página desçam, ela não é visível e nem clicável */}
                <Navbar />
            </div>
                
            <div className="page-info">
                <div className="sidebar-component">
                    <Sidebar
                        isCollapsed={isSidebarCollapsed}
                        setIsCollapsed={setIsSidebarCollapsed}
                        onCreatePost={() => setShowTagPopup(true)}
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
                            tag={post.tag}
                            extraDescription={post.extra}
                            imageUrl={post.image}
                            onSharePost={() => {
                                setSelectedPostForShare(post);
                                setShowSharePopup(true);
                            }}
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

            {showAuthPopup && (
                <AuthPopup
                    onClose={() => setShowAuthPopup(false)}
                />
            )}
            
            {showSharePopup && selectedPostForShare && (
                <SharePopup
                    name={selectedPostForShare.name}
                    age={selectedPostForShare.age}
                    sex={selectedPostForShare.sex}
                    owner={selectedPostForShare.owner}
                    date={selectedPostForShare.date}
                    tag={selectedPostForShare.tag}
                    extraDescription={selectedPostForShare.extra}
                    imageUrl={selectedPostForShare.image}
                    local={selectedPostForShare.location}
                    onCancel={() => {
                        setShowSharePopup(false);
                        setSelectedPostForShare(null);
                    }}
                />
            )}

            {showTagPopup && (
                <TagPopup
                    onOptionClick={handleAddPostClick}
                    onCancel={() => setShowTagPopup(false)}
                />
            )}
        </div>
    );
};

export default FeedPage;