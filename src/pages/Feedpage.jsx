import React, { useState } from 'react';
import CreatePostForm from '../Components/CreatePostForm.jsx';
import Post from '../Components/post.jsx';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
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
