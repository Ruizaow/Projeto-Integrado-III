import './styles/Post.css';

import UserIcon from "../assets/FeedPage/Feed/User.svg";
import Comment from "../assets/FeedPage/Feed/Comment.svg";
import Bookmark from "../assets/FeedPage/Feed/Bookmark.svg";
import Share from "../assets/FeedPage/Feed/Share.svg";
import CommentPopup from './CommentPopup.jsx';

const Post = ({ 
  username, timestamp, tag, name, age, breed,
  sex, owner, date, extraDescription, imageUrl, onMapClick, onSharePost, onSavePost, id // Adicione o ID aqui
}) => {
  
  return (
    <>
      <div className="post-card">
        <div className="post-header">
          <div className="user-info">
            <img src={UserIcon} alt="Usuário" />
            <span className="username">{username}</span>
          </div>
          <span className="timestamp">{timestamp}</span>
        </div>
        
        <h2 className={`tag ${tag}`} style={{textTransform: "uppercase"}}>
          {tag}
        </h2>

        <div className="post-image">
          {imageUrl ? (
            <img src={imageUrl} alt="animal" />
          ) : (
            <div className="image-placeholder">🐾</div>
          )}
        </div>

        <div className="post-description">
          <div className="description-line">
            <div className="description-column">
              <p> <strong>Nome:</strong> {name} </p>
              <p> <strong>Raça:</strong> {breed} </p>
              <p> <strong>{owner}</strong> </p>
            </div>
            <div className="description-column">
              <p> <strong>Idade:</strong> {age} </p>
              <p> <strong>Sexo:</strong> {sex} </p>
              <p> <strong>Última vez visto:</strong> {date} </p>
            </div>
          </div>
          <p> {extraDescription} </p>
        </div>

        <div className="post-footer">
          <button
            className="map-button"
            onClick={onMapClick}>
              Ir para o mapa
          </button>
          <div className="actions">
            <CommentPopup trigger={<img src={Comment} style={{ cursor: "pointer" }} alt="Comentar" />}/>
            <button onClick={onSavePost} className="save-button" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
              <img src={Bookmark} alt="Salvar" />
            </button>
            <img 
              src={Share} 
              alt="Compartilhar" 
              style={{ cursor: "pointer" }}
              onClick={onSharePost}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;