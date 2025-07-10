import { useState } from 'react';
import './HomePage.css';
import Navbar from '../components/navbar.jsx/'
import Sidebar from '../components/Sidebar.jsx'
import Post from '../components/Post.jsx'
import Map from '../components/Map.jsx'
import CreatePostForm from '../components/CreatePostForm.jsx';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleCreatePost = (formData) => {
        const previewUrl = formData.image ? URL.createObjectURL(formData.image) : null;

        const postWithPreview = {
        ...formData,
        image: previewUrl,
        };

        setPosts([postWithPreview, ...posts]);
        setIsFormOpen(false);
    };

    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <Sidebar onOpenForm={() => setIsFormOpen(true)} />
                <div className="feed">
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            username="usuário"
                            imageUrl={post.image}
                            description={`${post.name} - ${post.sex}, ${post.breed}. ${post.foundLost}. ${post.owner}. ${post.age}. ${post.extra}`}
                            onMapClick={() => alert(`Abrir mapa em: ${post.location}`)}
                        />
                    ))}
                </div>
                <Map />
            </div>

            {isFormOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={() => setIsFormOpen(false)}>X</button>
                        <CreatePostForm onCreate={handleCreatePost} />
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default HomePage;