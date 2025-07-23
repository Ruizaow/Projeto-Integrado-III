import { useState, useRef } from "react";

import DownloadPosterHandler from './handlers/handleDownloadPoster.js';

import TwitterIcon from "../../assets/FeedPage/SharePopup/X_icon.svg";
import InstagramIcon from "../../assets/FeedPage/SharePopup/instagram_icon.svg";
import WhatsAppIcon from "../../assets/FeedPage/SharePopup/whatsapp_icon.svg";
import DownloadIcon from "../../assets/FeedPage/SharePopup/download_icon.svg";

import backgroundPerdido from "../../assets/FeedPage/SharePopup/poster_perdido_background.png";
import backgroundLocalizado from "../../assets/FeedPage/SharePopup/poster_localizado_background.png";

import "./styles/SharePopup.css";

export default function SharePopup({
    name = "Sem nome",
    age = "Não informada",
    /* breed = "Não informada", */
    sex = "Não especificado",
    owner = "Não informado",
    date = "Data desconhecida",
    tag = "Tag não especificada",
    extraDescription = "...",
    imageUrl,
    local = "Não informado",
    onCancel
}) {

    // COISAS DO POSTER 2
    const posterRef = useRef();
    const [downloading, setDownloading] = useState(false);

    const backgroundImage = tag === "Pet perdido" ? backgroundPerdido : backgroundLocalizado;

    // Função para limitar descrição
    const formatarDescricao = (texto) => {
        if (!texto) return "...";
        return texto.length > 346 ? `${texto.substring(0, 346).trim()}...` : texto;
    };
    // Função para formatar data
    const formatarData = (data) => {
        if (!data) return "";
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    };

    const shareOnSocialMedia = (platform) => {
        const text = `Ajude a ${tag === 'Pet perdido' ? 'encontrar' : 'localizar'} ${name || 'este pet'}!`;
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
        <div className="poster-container">
            <div ref={posterRef} className="poster-modal">
                <img
                    src={backgroundImage}
                    alt="Background do Poster"
                    className="poster-background"
                />

                <div className="poster-content">
                    {/* Área da imagem */}
                    <div className="animal-image-container">
                        {imageUrl && (
                            <img src={imageUrl} alt="Foto do Animal" className="animal-image" />
                        )}
                    </div>

                    {/* Informações do animal */}
                    <h2 className="poster-nome">{name}</h2>

                    <p className="poster-descricao">
                        <strong>Descrição: </strong>
                        <span>{formatarDescricao(extraDescription)}</span>
                    </p>

                    <p className="poster-ultima-vista">
                        <strong>Última vez visto: </strong>
                        <span>{formatarData(date)}</span>
                    </p>

                    <div className="poster-sexo-idade-container">
                        <p className="poster-sexo">
                            <strong>Sexo: </strong>
                            <span>{sex}</span>
                        </p>
                        <p className="poster-idade">
                            <strong>Idade: </strong>
                            <span>{age}</span>
                        </p>
                    </div>

                    {/* PEGAR O EMAIL NO PERFIL DO USUÁRIO */}
                    <p className="poster-contato">
                        <strong>Contato: </strong>
                        <span>{owner}</span>
                    </p>

                    <p className="poster-local">
                        <strong>Local: </strong>
                        <span>{local}</span>
                    </p>
                </div>
            </div>

            <div className="poster-buttons-container">
                <button 
                    onClick={DownloadPosterHandler(posterRef, name, setDownloading)}
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
                    onClick={onCancel}
                    className="close-button"
                >
                    X
                </button>
            </div>
        </div>
    );
}