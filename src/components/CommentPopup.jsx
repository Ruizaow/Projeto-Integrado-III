import { useState } from 'react';
import Popup from 'reactjs-popup';
import './styles/CommentPopup.css';

const CommentPopup = ({trigger}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const submit = () => {
    if (!newComment.trim()) return;
    setComments(prev => [...prev, newComment]);
    setNewComment('');
  };

  return (
    <Popup trigger={trigger} position="bottom center">
        
      {close => (
        <div className="popup">
          <h3>Comentários</h3>
          <div className="comment-list">
  {comments.length > 0 ? comments.map((c, i) => (
    <div key={i} className="comment-bubble">
      {c}
    </div>
  )) : <em>sem comentarios</em>}
  </div>
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="Escreva um comentário"
          />
          <div style={{ marginTop: 8 }}>
            <button onClick={submit}>Enviar</button>
            <button onClick={close} style={{ marginLeft: 8 }}>Fechar</button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default CommentPopup;
