import React, { useEffect, useState } from 'react';
import Button from './Button';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {isVisible && (
                <button className=' fixed z-10 bottom-40 sm:bottom-5 left-8 w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.5] transition-all text-black dark:text-white bg-[--white] dark:bg-[--darkblue] pointer-events-auto'
                    onClick={scrollToTop}
                >
                    ↑
                </button>

            )}
        </>
    );
};

export default ScrollToTop;