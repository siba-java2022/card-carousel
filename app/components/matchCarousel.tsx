"use client";

import React, { useState, useEffect } from 'react';
import MatchCard from './matchCards';

interface Score {
    innings: string;
    team: string;
    score: string;
    over: string;
    wkt: string;
}

interface Match {
    seriesName: string;
    Team1Name: string;
    Team1SName: string;
    Team2Name: string;
    Team2SName: string;
    scores: Score[];
}

interface MatchCarouselProps {
    matches: Match[];
}

const MatchCarousel: React.FC<MatchCarouselProps> = ({ matches }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 3;

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    const getVisibleMatches = () => {
        let start = activeIndex * itemsPerPage;
        const visibleMatches = matches.slice(start, start + itemsPerPage);

        while (visibleMatches.length < itemsPerPage) {
            if (start > 0) {
                visibleMatches.unshift(matches[start - 1]);
                start -= 1;
            } else {
                break;
            }
        }

        return visibleMatches;
    };

    const totalPages = Math.ceil(matches.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalPages]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                {getVisibleMatches().map((match, index) => (
                    <MatchCard key={index} match={match} />
                ))}
            </div>
            <div className="dots">
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MatchCarousel;

