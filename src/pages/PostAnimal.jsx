import './styles/PostAnimal.css';

const PostAnimal = () => {
  return (
    <div className="postAnimal-card">
      <h1 className="titulo">Animal Perdido</h1>

      <div className="foto-container">
        <img
          src="https://i.pinimg.com/736x/38/a2/a3/38a2a36dec59b1b65bccf5f47c286cb4.jpg"
          alt="Animal perdido"
          className="foto"
        />
      </div>

      <div className="info">
        <p className="nome">linkada</p>
        <p className="contato">Contato: xxxx-xxxx</p>
        <p><strong>Descrição:</strong> Animal, Animal, Animal, Animal, Animal...</p>
        <p><strong>Local:</strong> Rua fulano nº15 - Bairro ciclano - Perto da casa da Chica</p>
        <p><strong>Sexo:</strong> Ser Ancestral <strong>Idade:</strong> 470</p>
      </div>

      <div className="acoes">
        <span className="acao">Dono do Oliveira</span>
        <button className="botao-mapa">ir para o mapa</button>
        <button className='comentarios'>💬</button>
      </div>


    </div>
  );
};

export default PostAnimal;
