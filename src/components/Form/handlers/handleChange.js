export const handleChange = (formData, setFormData) => (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};