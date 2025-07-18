import { useEffect } from 'react';

export function useTagType(tagType, setFormData) {
  useEffect(() => {
    if (tagType) {
      setFormData(prev => ({
        ...prev,
        foundLost: tagType,
      }));
    }
  }, [tagType, setFormData]);
}