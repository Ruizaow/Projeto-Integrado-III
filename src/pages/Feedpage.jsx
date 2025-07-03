import { useState } from 'react';
import CreatePostForm from '../components/CreatePostForm.jsx';
import Post from '../components/Post.jsx';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    const previewUrl = newPost.image ? URL.createObjectURL(newPost.image) : null;

    const postWithPreview = {
      ...newPost,
      image: previewUrl,
    };

    setPosts([postWithPreview, ...posts]);
  };

  return (
    <div className="feed">
      <CreatePostForm onCreate={handleCreatePost} />
      <div className="mt-4">
        {posts.map((post, index) => (
          <Post
            key={index}
            username="usuário"
            imageUrl={post.image}
            description={`${post.name} - ${post.sex}, ${post.breed}. ${post.extra}`}
            onMapClick={() => alert(`Abrir mapa em: ${post.location}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
