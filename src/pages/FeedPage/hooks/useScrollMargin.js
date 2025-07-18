import { useEffect, useState } from 'react';

export function useScrollMargin(min = 2, max = 3) {
    const [marginTop, setMarginTop] = useState(max);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollFactor = Math.min(scrollY / 300, 1);
            const newMargin = max - (max - min) * scrollFactor;
            setMarginTop(newMargin);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [min, max]);

    return marginTop;
}