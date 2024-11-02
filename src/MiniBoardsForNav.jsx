import React, { useEffect, useRef, useState } from 'react';
import { auth } from './firebase2';
import { useNavigate } from 'react-router-dom';

export function MiniBoardsForNav(Board) {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } 
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    const style = isVisible && Board.backgroundImage ? {
        backgroundImage: `url('${Board.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "rgba(255,255,255,0)"
    } : {};

    const BoardClick = () => {
        navigate(`/Board/${Board.id}`, { state: Board });
    };

    return (
        <div onClick={BoardClick} className='flex items-center mb-0.5 gap-2   cursor-pointer'>
        <div ref={ref} style={style}  className={`p-5 h-[40px]  w-[60px] hover:opacity-85 cursor-pointer rounded-sm ${Board.background}`}>
        </div>
        <h2 className='text-zinc-300  text-lg truncate whitespace-nowrap overflow-hidden'>{Board.title}</h2>
        </div>
    );
}
