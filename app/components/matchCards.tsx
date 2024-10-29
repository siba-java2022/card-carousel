"use client";
import React from 'react';

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

interface MatchCardProps {
    match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    const scoreMap: { [key: string]: Score[] } = {};

    match.scores.forEach(score => {
        if (!scoreMap[score.team]) {
            scoreMap[score.team] = [];
        }
        scoreMap[score.team].push(score);
    });

    return (
        <div className="match-card">
            <h3>{match.seriesName}</h3>
            {Object.entries(scoreMap).map(([team, scores], index) => (
                <div key={index} className="innings">
                    <p>
                        <strong>{team}:</strong>
                        {scores.length > 0 ? (
                            scores.map((score, idx) => (
                                <span key={idx}>
                                    {score?.score} / {score?.wkt} (Overs: {score?.over})
                                    {idx < scores.length - 1 && ' && '}
                                </span>
                            ))
                        ) : (
                            "No Results"
                        )}
                    </p>
                </div>
            ))}

            {Object.keys(scoreMap).length === 0 && (
                <p>No Results for this match</p>
            )}
        </div>
    );
};

export default MatchCard;
