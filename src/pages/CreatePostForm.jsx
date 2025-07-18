import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../database/Firebase.js';
import { ref, set, push } from 'firebase/database';

import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Form from '../components/Form/Form.jsx';

import './styles/CreatePostForm.css';

const CreatePostForm = () => {
    const location = useLocation();
    const tag = location.state?.tag || "Nova publicação";
    
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    
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

    return (
        <div className="container">
            <div className="visible-navbar"> <Navbar /> </div>
            <div className="occult-navbar"> <Navbar /> </div>

            <div className="page-info">
                <div className="sidebar-component">
                    <Sidebar
                        isCollapsed={isSidebarCollapsed}
                        setIsCollapsed={setIsSidebarCollapsed}
                    />
                </div>
                <Form
                    onCreate={cadastrarPost}
                    tagType={tag}
                    isSidebarCollapsed={isSidebarCollapsed}
                />
            </div>
        </div>
    );
};

export default CreatePostForm;