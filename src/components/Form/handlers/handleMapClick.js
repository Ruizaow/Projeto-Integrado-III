export const handleMapClick = (setFormData) => async (e) => {
  const { lat, lng } = e.latlng;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();

    const street_address =
      data.address?.road ||
      data.address?.pedestrian ||
      data.address?.footway ||
      'Endereço não identificado';

    setFormData((prev) => ({
      ...prev,
      location: street_address,
      coordinates: { lat, lng },
    }));
  } catch (error) {
    console.error('Erro ao buscar endereço:', error);
  }
};