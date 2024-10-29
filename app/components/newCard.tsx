"use clinet";
import React from 'react';

interface NewsCardProps {
    headline: string;
    intro: string;
    imageUrl: string;
    newsGroup: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ headline, intro, imageUrl, newsGroup }) => {
    return (
        <div className="news-card">
            <img src="https://tribe-ui-assets.s3.ap-south-1.amazonaws.com/dev-env/pwa/images/Logo.svg" alt={headline} className="news-image" />
            <h4>{newsGroup}</h4>
            <h4>{headline}</h4>
            <p>{intro}</p>
        </div>
    );
};

export default NewsCard;
