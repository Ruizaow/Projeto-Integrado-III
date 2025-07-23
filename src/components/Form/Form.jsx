import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Map from '../Map/Map.jsx';
import UploadIcon from "../../assets/CreatePostForm/Form/Upload.svg";
import { handleChange } from './handlers/handleChange.js';
import { handleSubmit } from './handlers/handleSubmit.js';
import { handleMapClick } from './handlers/handleMapClick.js';
import { useImagePreview } from './hooks/useImagePreview.js';
import { useTagType } from './hooks/useTagType.js';
import selectStyles from './styles/SelectStyles.jsx';
import './styles/Form.css';

const Form = ({ onCreate, tagType, isSidebarCollapsed }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', age: '', breed: '', sex: '', owner: '',
    date: '', extra: '', image: '', location: '', coordinates: null, tag: '',
  });
  const [formPage, setformPage] = useState(1);
  const formPage_action = {
    page_1: "Informações do Pet",
    page_2: "Imagem do Pet",
    page_3: "Indique a localização aproximada no mapa",
  };
  const previewUrl = useImagePreview(formData.image);
  useTagType(tagType, setFormData);

  const onChange = handleChange(formData, setFormData);
  const onSubmit = handleSubmit(formData, setFormData, onCreate, navigate);
  const onMapClick = handleMapClick(setFormData);

  return (
    <form onSubmit={onSubmit} className='form'
      style={{
        paddingLeft: isSidebarCollapsed ? '19.375rem' : '30.625rem'
        // paddingLeft: '15rem'
      }}
    >

      <h2 className="form-title">
        {tagType === "Pet localizado" ? "Pet em situação de rua" : tagType}
      </h2>
      <div className="row" style={{marginBottom: "2rem"}}>
        <label> {formPage_action[`page_${formPage}`]} </label>
        <label> Página {formPage} de 3 </label>
      </div>

      {/* Etapa 1 - Informações do Pet */}
      {formPage === 1 && (
        <div className="page-1">
          <div className="row">
            <div className="field">
              <label> Nome </label>
              <input name="name" placeholder="Nome do pet" value={formData.name} onChange={onChange} />
            </div>
            <div className="field">
              <label> Idade </label>
              <input name="age" placeholder="Idade aproximada" value={formData.age} onChange={onChange} />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label> Raça </label>
              <input name="breed" placeholder="Raça do pet" value={formData.breed} onChange={onChange} />
            </div>
            <div className="field">
              <label> Sexo </label>
              <Select
                options= {[
                  { value: 'Macho', label: 'Masculino' },
                  { value: 'Fêmea', label: 'Feminino' },
                ]}
                placeholder="Selecione o sexo"
                styles={selectStyles}
                onChange={(selected) =>
                  setFormData({ ...formData, sex: selected.value })
                }
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label> Tutor </label>
              <Select
                options= {[
                  { value: 'Possui tutor', label: 'Possui tutor' },
                  { value: 'Não possui tutor', label: 'Não possui tutor' },
                ]}
                placeholder="O pet possui tutor?"
                styles={selectStyles}
                onChange={(selected) =>
                  setFormData({ ...formData, owner: selected.value })
                }
              />
            </div>
            <div className="field">
              <label> Data que foi visto por último </label>
              <input type="date" name="date" value={formData.date} onChange={onChange} />
            </div>
          </div>

          <label> Descrição </label>
          <textarea name="extra" value={formData.extra} onChange={onChange}
            placeholder="Informações extras que podem ajudar a identificar o pet"
          />
        </div>
      )}

      {/* Etapa 2 - Upload de Imagem */}
      {formPage === 2 && (
        <div className="page-2">
          {formData.image ? (
            <div className="uploaded-image">
              <img src={previewUrl} alt="Preview" />
            </div>
          ) : (
            <div className="placeholder-image">
              <img src={UploadIcon} />
              Selecione a imagem
            </div>
          )}
          <div className="imgUploadField">
            <div className="row">
              <label htmlFor="image-upload" className="upload-button"> Procurar... </label>
              {formData.image ? (
                <p></p>
              ) : (
                <p> Nenhuma imagem selecionada </p>
              )}
            </div>
            
            <input id="image-upload" name="image" type="file"
                  accept="image/*" style={{ display: 'none' }}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  image: e.target.files[0]
                })
              }
            />
          </div>
        </div>
      )}

      {/* Etapa 3 - Mapa */}
      {formPage === 3 && (
        <div className="page-3">
          <div className="map-container">
            <Map expanded={true} onClick={onMapClick} markers={
              formData.coordinates ? [formData] : []
            } />
          </div>
          <p> Endereço: {formData.location || "Clique no mapa para obter o endereço"} </p>
        </div>
      )}

      {/* Botões de navegação */}
      <div className="navButtons">
        { formPage === 1 && (
          <div style={{opacity: '0'}}></div>
        )}
        {formPage > 1 && (
          <button type="button" className="back-button" onClick={() => setformPage(formPage - 1)}>
            Voltar
          </button>
        )}
        {formPage < 3 ? (
          <button type="button" className="next-button" onClick={() => setformPage(formPage + 1)}>
            Próximo
          </button>
        ) : (
          <button type="submit" className="next-button">
            Criar Publicação
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;