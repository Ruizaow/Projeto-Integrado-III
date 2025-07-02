import React from 'react';
import './Post.css';

const Post = ({ username, imageUrl, description, onMapClick }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="avatar">👤</div>
        <span className="username">{username}</span>
      </div>

      <div className="post-image">
        {imageUrl ? (
          <img src={imageUrl} alt="animal" />
        ) : (
          <div className="image-placeholder">🐾</div>
        )}
      </div>

      <div className="post-description">
        <p>{description}</p>
      </div>

      <div className="post-footer">
        <button className="map-button" onClick={onMapClick}>Ir para o mapa</button>
        <div className="actions">
          <button>💬</button>
          <button>❤️</button>
          <span>🔗</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
