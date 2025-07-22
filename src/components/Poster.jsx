import backgroundPerdido from "../assets/Poster/poster_perdido_background.png";
import backgroundLocalizado from "../assets/Poster/poster_localizado_background.png";

import './styles/Poster.css';


export default function Poster({ 
  // Props com valores padrão
  name = "Sem nome",
  age = "Não informada",
  breed = "Não informada",
  sex = "Não especificado",
  owner = "Não informado",
  date = "Data desconhecida",
  extraDescription = "...",
  imageUrl,
  tag = "pet-perdido",
  local = "Não informado"
}) {
  // Renomeando as variáveis para português (opcional)
  const nome = name;
  const idade = age;
  const raca = breed;
  const sexo = sex;
  const contato = owner; // pegar o email no perfil do usuario
  const ultimaVista = date;
  const descricao = extraDescription;
  const backgroundImage = ['pet-localizado', 'localizado'].includes(tag?.toLowerCase()) 
  ? backgroundLocalizado 
  : backgroundPerdido;

    console.log("Debug - Tag recebida:", tag, "Background:", backgroundImage); // Para testes

  // Função para limitar descrição
  const formatarDescricao = (texto) => {
    if (!texto) return "...";
    return texto.length > 346 
      ? `${texto.substring(0, 346).trim()}...` 
      : texto;
  };

  // Função para formatar data
  const formatarData = (data) => {
    if (!data) return "";
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="poster-container">
      <img 
        src={backgroundImage} 
        alt="Background do Poster" 
        className="poster-background" 
      />

      <div className="poster-content">
        {/* Área da imagem */}
        <div className="animal-image-container">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt="Foto do Animal" 
              className="animal-image" 
            />
          )}
        </div>

        {/* Informações do animal */}
        <h2 className="poster-nome">{nome}</h2>
        
        <p className="poster-descricao">
          <strong>Descrição: </strong> 
          <span>{formatarDescricao(descricao)}</span>
        </p>

        <p className="poster-ultima-vista">
          <strong>Última vez visto: </strong> 
          <span>{formatarData(ultimaVista)}</span>
        </p>
        
        <div className="poster-sexo-idade-container">
          <p className="poster-sexo">
            <strong>Sexo: </strong> 
            <span>{sexo}</span>
          </p>
          <p className="poster-idade">
            <strong>Idade: </strong> 
            <span>{idade}</span>
          </p>
        </div>

        <p className="poster-contato">
          <strong>Contato: </strong> 
          <span>{contato}</span>
        </p>

        <p className="poster-local">
          <strong>Local: </strong> 
          <span>{local}</span>
        </p>
      </div>
    </div>
  );
}