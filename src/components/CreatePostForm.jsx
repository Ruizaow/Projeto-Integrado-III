import React, { useState } from 'react';
import './FormPost.css'

const CreatePostForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    breed: '',
    owner: '',
    age: '',
    extra: '',
    image: null,
    location: '',
    found: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      name: '',
      sex: '',
      breed: '',
      owner: '',
      age: '',
      extra: '',
      image: '',
      location: '',
      foundLost: '',
    });
  };

  return (
    <form 
  onSubmit={handleSubmit}
  className='form'
  >

  {/* Nome animal */}
  <input
    name="name"
    placeholder="Nome"
    value={formData.name}
    onChange={handleChange}
  />

  {/* Sexo e Raça */}
  <div className="flex gap-3 mb-3">
    <select name="sex" id="">
      <option value="male">Masculino</option>
      <option value="female">Feminino</option>
    </select>
    <input
      name="breed"
      placeholder="Raça"
      value={formData.breed}
      onChange={handleChange}
    />
  </div>

  {/*pet perdido ou encontrado*/}
  <div className='Found'>
      <input
      name="foundLost"
      placeholder="Encontrado/Perdido"
      value={formData["found/lost"]}
      onChange={handleChange}
      />
  </div>

  {/* Tem dono e idade */}
  <div className="flex gap-3 mb-3">
    <input
      name="owner"
      placeholder="Tem dono?"
      value={formData.owner}
      onChange={handleChange}
    />
    <input
      name="age"
      placeholder="Idade"
      value={formData.age}
      onChange={handleChange}
    />
  </div>

  {/* Informações extra */}
  <textarea
    name="extra"
    placeholder="Informações extra"
    value={formData.extra}
    onChange={handleChange}
  />

  {/* URL da imagem */}
  <input
    name="image"
    placeholder="URL da imagem"
    value={formData.image}
    onChange={handleChange}
  />

  {/* Local no mapa */}
  <input
    name="location"
    placeholder="Local no mapa"
    value={formData.location}
    onChange={handleChange}
  />

  {/* Botão */}
  <button
    type="submit"
    className="botão"
  >
    Criar Post
  </button>

</form>

  );
};

export default CreatePostForm;
