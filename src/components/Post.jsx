import './styles/Post.css';
import UserIcon from "../assets/FeedPage/Feed/User.svg";
import Comment from "../assets/FeedPage/Feed/Comment.svg";
import Bookmark from "../assets/FeedPage/Feed/Bookmark.svg";
import Share from "../assets/FeedPage/Feed/Share.svg";
import CommentPopup from './coments.jsx';


const Post = ({ username, timestamp, foundLost, name, age, breed,
                sex, owner, date, extraDescription, imageUrl, onMapClick
}) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <img src={UserIcon} />
          <span className="username">{username}</span>
        </div>
        <span className="timestamp">{timestamp}</span>
      </div>
      
      <h2 style={{textTransform: "uppercase"}}>{foundLost}</h2>

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
          <img src={Bookmark} />
          <img src={Share} />
        </div>
      </div>
    </div>
  );
};

export default Post;
