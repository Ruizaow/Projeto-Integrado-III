import { useEffect, useState } from 'react';
import './HomePage.css';

import { db } from '../Firebase';
import { ref, set, push, onValue } from 'firebase/database';

import Navbar from '../components/navbar.jsx/'
import Sidebar from '../components/Sidebar.jsx'
import Post from '../components/Post.jsx'
import Map from '../components/Map.jsx'
import CreatePostForm from '../components/CreatePostForm.jsx';

const HomePage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const postsRef = ref(db, 'posts');

        const unsubscribe = onValue(postsRef, (snapshot) => {
            try {
                const data = snapshot.val();
                let postsArray = [];

                if (data) {
                    postsArray = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key]
                    }));
                }
                setPosts(postsArray);
                setLoading(false);
                setError(null);
                console.log("Posts carregados com sucesso:", postsArray);
            } catch (err) {
                console.error("Erro ao processar os dados:", err);
                setError("Ocorreu um erro ao carregar os comentários.");
                setLoading(false);
            }
        }, (dbError) => {
            console.error("Erro ao conectar ao Firebase:", dbError);
            setError("Não foi possível conectar ao banco de dados.");
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    async function uploadToCloudinary(imageFile) {
        const data = new FormData();
        data.append('file', imageFile);
        data.append('upload_preset', 'public_upload');
        data.append('cloud_name', 'dzzsvcvlj');

        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/dzzsvcvlj/image/upload', {
                method: 'POST',
                body: data,
            });

            const json = await res.json();
            return json.secure_url;
        } catch (err) {
            console.error('Erro ao enviar imagem para o Cloudinary:', err);
            throw err;
        }
    }

    const cadastrarPost = async (formData) => {
        try {
            let imageUrl = null;
            if (formData.image) {
                imageUrl = await uploadToCloudinary(formData.image);
            }

            const novoPost = {
                ...formData,
                image: imageUrl,
                timestamp: Date.now()
            };

            const postsRef = ref(db, 'posts');
            const novoPostRef = push(postsRef);
            
            await set(novoPostRef, novoPost);
            console.log('Post salvo com sucesso!');
        }
        catch (error) {
            console.error('Erro ao salvar post:', error);
            alert('Erro ao salvar post');
        }
    }

    const handleCreatePost = (formData) => {
        cadastrarPost(formData);
        setIsFormOpen(false);
    };

    return (
        <div className="container">
            <Navbar />

            <div className="status-messages" style={{ padding: '10px', color: '#444', textAlign: 'center' }}>
                {loading && <div style={{ color: '#555' }}>Carregando posts...</div>}
                {error && <div style={{ color: 'red' }}>Erro: {error}</div>}
                {!loading && !error && posts.length === 0 && (
                    <div style={{ color: '#999' }}>Nenhum post para exibir ainda.</div>
                )}
            </div>

            <div className="content">
                <Sidebar onOpenForm={() => setIsFormOpen(true)} />
                <div className="feed">
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            username="usuário"
                            timestamp={new Date(post.timestamp).toLocaleString()}
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
                        <button className="close-btn" onClick={() => setIsFormOpen(false)}>
                            X
                        </button>
                        <CreatePostForm onCreate={handleCreatePost} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;