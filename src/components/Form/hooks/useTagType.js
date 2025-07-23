import { useEffect } from 'react';

export function useTagType(tagType, setFormData) {
  useEffect(() => {
    if (tagType) {
      setFormData(prev => ({
        ...prev,
        tag: tagType,
      }));
    }
  }, [tagType, setFormData]);
}