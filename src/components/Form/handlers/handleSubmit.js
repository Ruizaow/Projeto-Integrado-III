export const handleSubmit = (formData, setFormData, onCreate, navigate) => async (e) => {
  e.preventDefault();

  if (!formData.location || formData.location.trim() === '') {
    alert('Selecione a localização no mapa antes de criar a publicação.');
    return;
  }

  try {
    await onCreate(formData);

    setFormData({
      name: '', age: '', breed: '', sex: '', owner: '',
      date: '', extra: '', image: '', location: '', coordinates: null,
    });

    navigate('/');
  } catch (error) {
    console.error('Erro ao criar publicação:', error);
    alert('Erro ao criar publicação');
  }
};