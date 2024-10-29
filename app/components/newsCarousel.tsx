"use client";

import React, { useState, useEffect } from 'react';
import NewsCard from './newCard';

const news1 = [
    {
        "id": 1,
        "headline": "CWI awards multi-year contracts to nine players",
        "intro": "Six men and three women have handed two-year deals by CWI for the first time."
    },
    {
        "id": 2,
        "headline": "Charles, Faf power Saint Lucia Kings to CPL final",
        "intro": "Rain had the final say in the contest as Guyana Amazon Warriors fell short by the DLS method"
    },
    {
        "id": 3,
        "headline": " Rickelton, Stubbs set up South Africa's big win",
        "intro": "Chasing 272, Ireland put up a poor performance with the bat to lose the game by 139 runs"
    },
    {
        "id": 4,
        "headline": "India banking on stability in pursuit of elusive silverware ",
        "intro": "After having come close in multiple occasions recently, Harmanpreet Kaur's girls are raring to go all the way this time around"
    },
    {
        "id": 5,
        "headline": "Indomitable Australia carry expectations on their shoulders and a target on their back",
        "intro": "No team has won four straight T20 World Cups and the measure of Alyssa Healy's takeover project will be determined by how she can get her team to meet the dauntingly high expectations"
    },
    {
        "id": 6,
        "headline": "Captains call for lessons to be learned from governance in men's game",
        "intro": "The ten leaders at the Women's T20 World Cup 2024 came together in an engaging discussion to call for more visibility, enhanced context, better governance and suitable compensation in their sport"
    }
]


const news2 = [

    {
        "id": 7,
        "headline": "Buttler set for white-ball return on tour of West Indies",
        "intro": "England have also handed 22-year-old Yorkshire leg-spinner Jafer Chohan his first national team call-up "
    },
    {
        "id": 8,
        "headline": "Doubts arise over cricket's inclusion in 2026 Asian Games",
        "intro": "Currently the Games shall feature 41 different sports but cricket is not amongst them "
    },
    {
        "id": 9,
        "headline": "Plucky Sri Lanka look to close the gap to traditional heavyweights",
        "intro": "Buoyed by their recent Asia Cup triumph, Chamari Athapaththu will hope to guide her team out of the group stage for the first time"
    },
    {
        "id": 10,
        "headline": "Inexperience, inefficiency weigh heavy on Pakistan at the World Cup",
        "intro": "Since the last T20 World Cup, Pakistan have lost 16 out of the 26 T20Is they have played, which includes a series loss at home to South Africa only last month"
    },
    {
        "id": 11,
        "headline": "Transitioning South Africa out to be on the right side of the evolutionary curve",
        "intro": "Laura Wolvaardt's team have made tremendous improvements to their boundary hitting abilities"
    },
    {
        "id": 12,
        "headline": "Sarfaraz Khan's double ton props up Mumbai",
        "intro": "With an unbeaten 221, Sarafaraz helped Mumbai to 536 by the end of the second day"
    }
]

const news3 = [

    {
        "id": 13,
        "headline": "October 2024 - News Digest",
        "intro": "News bytes that you may have missed otherwise"

    },
    {
        "id": 14,
        "headline": "WTC Scenarios: India strengthen top spot; Sri Lanka chasing Australia",
        "intro": "The race for a spot in the WTC final is heating up with 26 Tests still left to play across ten series."
    },
    {
        "id": 15,
        "headline": "Australia's white-ball success in UK masked by Test opener uncertainty",
        "intro": "Even as Australia wrapped up a successful white-ball campaign, the biggest question heading into the home summer - who will partner Usman Khawaja as Test opener - remains unanswered"
    },
    {
        "id": 16,
        "headline": "Miller's explosion trumps Pooran's masterclass as Royals eliminate TKR",
        "intro": "With the second innings reduced to a five-overs contest due to floodlight failure, Miller's frenetic 17-ball 50 overshadowed Pooran's 91 in the first innings"

    },
    {
        "id": 17,
        "headline": "Babar Azam steps down as Pakistan white-ball captain",
        "intro": "Pakistan's immediate white-ball assignments include tours of Australia, Zimbabwe and South Africa through the next six months"
    },
    {
        "id": 18,
        "headline": "Tim Southee quits as New Zealand Test captain",
        "intro": "Tom Latham has been named as the new red-ball skipper"

    }
]

const NewsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mergedNews, setMergedNews] = useState<any[]>([]);

    useEffect(() => {
        const mergeNews = () => {
            const tempMerged: any[] = [];
            const newsLists = [
                { list: news1, group: "News 1" },
                { list: news2, group: "News 2" },
                { list: news3, group: "News 3" },
            ];
            const maxItemsPerCycle = 3;

            let done = false;
            while (!done) {
                done = true;
                for (const { list, group } of newsLists) {
                    if (list.length > 0) {
                        const itemsToTake = Math.min(maxItemsPerCycle, list.length);
                        const items = list.splice(0, itemsToTake);

                        // Add the news group to each item
                        const itemsWithGroup = items.map(item => ({
                            ...item,
                            newsGroup: group, // Add the news group back
                        }));

                        tempMerged.push(...itemsWithGroup);
                        done = false;
                    }
                }
            }

            setMergedNews(tempMerged);
        };

        mergeNews();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const nextIndex = prev + 3;
            return nextIndex < mergedNews.length ? nextIndex : 0; // Loop back to start if at end
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const prevIndex = prev - 3;
            return prevIndex >= 0 ? prevIndex : Math.max(0, mergedNews.length - 3); // Loop back to the end if at start
        });
    };

    return (
        <div className="news-carousel">
            <button className="arrow left" onClick={handlePrev}>&lt;</button>
            <div className="news-cards">
                {mergedNews.slice(currentIndex, currentIndex + 3).map(news => (
                    <NewsCard
                        key={news.id}
                        headline={news.headline}
                        intro={news.intro}
                        imageUrl={news.imageUrl}
                        newsGroup={news.newsGroup} // Correctly pass the newsGroup here
                    />
                ))}
            </div>
            <button className="arrow right" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default NewsCarousel;


