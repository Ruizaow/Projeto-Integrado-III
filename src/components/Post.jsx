import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import './styles/Post.css';
import UserIcon from "../assets/FeedPage/Feed/User.svg";
import Comment from "../assets/FeedPage/Feed/Comment.svg";
import Bookmark from "../assets/FeedPage/Feed/Bookmark.svg";
import Share from "../assets/FeedPage/Feed/Share.svg";
import CommentPopup from './coments.jsx';
import Poster from './Poster';

import TwitterIcon from "../assets/Share/X_icon.svg";
//import FacebookIcon from "../assets/Share/facebook_icon.svg"; // Adicione este import
import InstagramIcon from "../assets/Share/instagram_icon.svg";
import WhatsAppIcon from "../assets/Share/whatsapp_icon.svg";
import DownloadIcon from "../assets/Share/download_icon.svg";

const Post = ({ 
  username, timestamp, foundLost, name, age, breed,
  sex, owner, date, extraDescription, imageUrl, onMapClick, 
  tag = "pet-perdido"
}) => {
  const [showPoster, setShowPoster] = useState(false);
  const posterRef = useRef();
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPoster = async () => {
    if (!posterRef.current) return;

    try {
      setDownloading(true);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const originalStyles = {
        padding: posterRef.current.style.padding,
        margin: posterRef.current.style.margin,
      };
      posterRef.current.style.padding = '0';
      posterRef.current.style.margin = '0';

      const dataUrl = await toPng(posterRef.current.firstChild, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: null,
        filter: (node) => !node.classList?.contains('poster-download-actions')
      });

      Object.assign(posterRef.current.style, originalStyles);

      const link = document.createElement('a');
      link.download = `poster-${name || 'pet'}.png`;
      link.href = dataUrl;
      link.click();

    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setDownloading(false);
    }
  };

  const shareOnSocialMedia = (platform) => {
    const text = `Ajude a ${tag === 'pet-perdido' ? 'encontrar' : 'localizar'} ${name || 'este pet'}!`;
    const url = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'instagram':
        // Instagram não suporta compartilhamento direto via web
        shareUrl = 'https://www.instagram.com/';
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
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
            <img src={Bookmark} alt="Favoritar" />
            <img 
              src={Share} 
              alt="Compartilhar" 
              style={{ cursor: "pointer" }} // Corrigido o typo (de "cursos" para "cursor")
              onClick={() => setShowPoster(true)} 
            />
          </div>
        </div>
      </div>

      {showPoster && (
        <div className="poster-modal">
          
          <div className="poster-preview-container" style={{ 
            transform: 'scale(0.7)',
            transformOrigin: 'center' 
          }}>
            <div ref={posterRef} className="poster-capture-area">
              <Poster
                name={name}
                age={age}
                breed={breed}
                sex={sex}
                owner={owner}
                date={date}
                extraDescription={extraDescription}
                imageUrl={imageUrl}
                foundLost={tag === 'pet-perdido' ? 'Perdido' : 'Localizado'}
                tag={tag}
                local="Localização a definir"
              />
            </div>
          </div>

          <div className="poster-buttons-container">
            <button 
              onClick={handleDownloadPoster}
              className="download-button"
              disabled={downloading}
            >
              <img src={DownloadIcon} alt="Download" style={{ marginRight: '8px' }} />
            </button>
            
            <div className="social-share-buttons">
              <button 
                onClick={() => shareOnSocialMedia('twitter')}
                className="social-button twitter"
                title="Compartilhar no Twitter"
              >
                <img src={TwitterIcon} alt="Twitter" />
              </button>

              <button 
                onClick={() => shareOnSocialMedia('instagram')}
                className="social-button instagram"
                title="Compartilhar no Instagram"
              >
                <img src={InstagramIcon} alt="Instagram" />
              </button>
              <button 
                onClick={() => shareOnSocialMedia('whatsapp')}
                className="social-button whatsapp"
                title="Compartilhar no WhatsApp"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" />
              </button>
            </div>
            
            <button 
              onClick={() => setShowPoster(false)}
              className="close-button"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;