import { useEffect, useState } from 'react';

export function useScrollMargin(min = 2, max = 3, selector = null) {
    const [marginTop, setMarginTop] = useState(max);

    useEffect(() => {
        const scrollContainer = selector
            ? document.querySelector(selector)
            : window;

        if (!scrollContainer)
            return;

        const getScrollY = () =>
            scrollContainer === window
                ? window.scrollY
                : scrollContainer.scrollTop;
        
        const handleScroll = () => {
            const scrollY = getScrollY();
            const scrollFactor = Math.min(scrollY / 300, 1);
            const newMargin = max - (max - min) * scrollFactor;
            setMarginTop(newMargin);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, [min, max, selector]);

    return marginTop;
}