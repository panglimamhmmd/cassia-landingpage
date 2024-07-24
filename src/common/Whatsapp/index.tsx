import { useCallback, useEffect, useState } from 'react';
import { SvgIcon } from '../SvgIcon';
import { ScrollUpContainer } from './styles';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = useCallback(() => {
        const offsetFromTop = window.scrollY;

        if (!showScroll && offsetFromTop > 350) {
            setShowScroll(true);
        } else if (offsetFromTop <= 350) {
            setShowScroll(false);
        }
    }, [showScroll]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [checkScrollTop]);

    const scrollUp = () => {
        const element = document.getElementById('contact') as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    return (
        <ScrollUpContainer onClick={scrollUp} show={showScroll}>
            <SvgIcon src="WA.svg" width="40px" height="40px" />
        </ScrollUpContainer>
    );
};

export default ScrollToTop;
