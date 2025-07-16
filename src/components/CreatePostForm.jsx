import { useState } from 'react';
import './FormPost.css';

const CreatePostForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    breed: '',
    foundLost: '',
    owner: '',
    age: '',
    extra: '',
    image: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onCreate(formData);
    setFormData({
      name: '',
      sex: '',
      breed: '',
      foundLost: '',
      owner: '',
      age: '',
      extra: '',
      image: '',
      location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      
      {/* Nome do animal */}
      <input
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Sexo e Raça */}
      <div className="Sex">
        <select
          name="sex"
          value={formData.sex}
          onChange={handleChange}
        >
          <option value="">Selecione o sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="não sei">Não sei</option>
        </select>
        <input
          name="breed"
          placeholder="Raça"
          value={formData.breed}
          onChange={handleChange}
        />
      </div>

      {/* Pet perdido ou encontrado */}
      <div className='Found'>
        <select
          name="foundLost"
          value={formData.owner}
          onChange={handleChange}
        >
          <option value="">Encontrado/perdido</option>
          <option value="perdido">Perdido</option>
          <option value="rua">Pet em situação de rua</option>
        </select>

      </div>

      {/* Tem dono e idade */}
      <div className="Owner-Age">
          
        <select
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        >
          <option value="">Tem Dono?</option>
          <option value="Não">Não</option>
          <option value="sim">Sim</option>
          <option value="não sei">Não Sei</option>
        </select>

        <input
          name="age"
          placeholder="Idade"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      {/* Informações extras */}
      <textarea
        name="extra"
        placeholder="Informações extra"
        value={formData.extra}
        onChange={handleChange}
      />

      {/* URL da imagem */}
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFormData({
            ...formData,
            image: e.target.files[0] // pega o arquivo
          })
        }
      />

      {/* Local no mapa */}
      <input
        name="location"
        placeholder="Local no mapa"
        value={formData.location}
        onChange={handleChange}
      />

      {/* Botão de envio */}
      <button type="submit" className="botão">
        Criar Post
      </button>
    </form>
  );
};

export default CreatePostForm;