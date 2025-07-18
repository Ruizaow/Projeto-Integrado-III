import { useEffect, useState } from 'react';

export function useImagePreview(imageFile) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!imageFile)
        return;

    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  return previewUrl;
}