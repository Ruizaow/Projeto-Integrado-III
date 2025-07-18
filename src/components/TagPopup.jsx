import { useState } from 'react';
import './styles/TagPopup.css'

export default function TagPopup({ onOptionClick, onCancel }) {
    const [selectedTag, setSelectedTag] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const toggleTag = (tag) => {
        setSelectedTag((prev) => (prev === tag ? null : tag));
        setErrorMessage('');
    };
    const handleConfirm = () => {
        if (!selectedTag) {
            setErrorMessage('Selecione uma das tags abaixo');
            return;
        }
        onOptionClick(selectedTag);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h2>Sobre o que você quer publicar?</h2>
                <h3>Escolha uma tag que ficará em destaque no seu post</h3>

                {errorMessage && (
                    <div className="error-message">
                        {errorMessage}
                    </div>
                )}
                
                <div className="tag-buttons">
                    <div className="row">
                        <button className={selectedTag === 'pet-perdido' ? 'selected' : ''}
                            onClick={() => toggleTag('pet-perdido')}
                        > Pet Perdido </button>
                        <button className={selectedTag === 'pet-localizado' ? 'selected' : ''}
                            onClick={() => toggleTag('pet-localizado')}
                        > Pet Localizado </button>
                        {/* <button> Dicas de cuidado </button> */}
                    </div>
                    {/*
                    <div className="row">
                        <button> Evento de Adoção </button>
                        <button> Promoção de Produtos </button>
                        <button> Evento </button>
                    </div>
                    <div className="row">
                        <button> Produtos para Pets </button>
                    </div>
                    */}
                </div>

                <div className="close-buttons">
                    <button className="cancel-btn" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className="confirm-btn" onClick={handleConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}