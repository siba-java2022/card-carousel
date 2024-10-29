"use client";
import React from 'react';
import MatchCarousel from '@/app/components/matchCarousel';

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

const matchesData: Match[] = [
    {
        "seriesName": "Irani Cup",
        "Team1Name": "Mumbai",
        "Team1SName": "MUM",
        "Team2Name": "Delhi",
        "Team2SName": "DEL",
        "scores": [
            {
                "innings": "1",
                "team": "MUM",
                "score": "537",
                "over": "140",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "DEL",
                "score": "150",
                "over": "30",
                "wkt": "3"
            }
        ]

    },
    {
        "seriesName": "World T20 Cup",
        "Team1Name": "Bangladesh",
        "Team1SName": "BNG",
        "Team2Name": "Scotland",
        "Team2SName": "SCT",
        "scores": []
    },
    {
        "seriesName": "Caribbean Premier League",
        "Team1Name": "Guyana Amazon Warriors",
        "Team1SName": "GAW",
        "Team2Name": "Saint Lucia Kings",
        "Team2SName": "SLK",
        "scores": [
            {
                "innings": "1",
                "team": "SLK",
                "score": "198",
                "over": "20",
                "wkt": "5"
            },
            {
                "innings": "2",
                "team": "GAW",
                "score": "106",
                "over": "20",
                "wkt": "4"
            }
        ]
    },
    {
        "seriesName": "Bangladesh tour of India",
        "Team1Name": "India",
        "Team1SName": "IND",
        "Team2Name": "Bangladesh",
        "Team2SName": "BNG",
        "scores": [
            {
                "innings": "1",
                "team": "BNG",
                "score": "233",
                "over": "74.2",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "IND",
                "score": "285",
                "over": "34.4",
                "wkt": "9"
            },
            {
                "innings": "3",
                "team": "BNG",
                "score": "144",
                "over": "47",
                "wkt": "10"
            },
            {
                "innings": "4",
                "team": "IND",
                "score": "98",
                "over": "17",
                "wkt": "3"
            }
        ]
    },
    {
        "seriesName": "Ireland v South Africa in UAE",
        "Team1Name": "Ireland",
        "Team1SName": "IRE",
        "Team2Name": "South Africa",
        "Team2SName": "RSA",
        "scores": [
            {
                "innings": "1",
                "team": "RSA",
                "score": "271",
                "over": "50",
                "wkt": "9"
            },
            {
                "innings": "2",
                "team": "IRE",
                "score": "132",
                "over": "31.5",
                "wkt": "10"
            }
        ]
    },
    {
        "seriesName": "Country Championship",
        "Team1Name": "Nottinghamshire",
        "Team1SName": "NOTTS",
        "Team2Name": "Warwickshire",
        "Team2SName": "WARKS",
        "scores": [
            {
                "innings": "1",
                "team": "NOTTS",
                "score": "489",
                "over": "130",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "WARKS",
                "score": "373",
                "over": "110",
                "wkt": "5"
            }
        ]
    },
    {
        "seriesName": "Australia in England",
        "Team1Name": "England",
        "Team1SName": "ENG",
        "Team2Name": "Australia",
        "Team2SName": "AUS",
        "scores": [
            {
                "innings": "1",
                "team": "AUS",
                "score": "302",
                "over": "50",
                "wkt": "7"
            },
            {
                "innings": "2",
                "team": "ENG",
                "score": "300",
                "over": "45.4",
                "wkt": "10"
            }
        ]
    },
    {
        "seriesName": "New Zealand tour of Sri Lanka",
        "Team1Name": "Sri Lanka",
        "Team1SName": "SL",
        "Team2Name": "New Zealand",
        "Team2SName": "NZ",
        "scores": [
            {
                "innings": "1",
                "team": "SL",
                "score": "602",
                "over": "150",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "NZ",
                "score": "88",
                "over": "30",
                "wkt": "10"
            },
            {
                "innings": "3",
                "team": "NZ",
                "score": "360",
                "over": "100",
                "wkt": "10"
            }
        ]
    },
    {
        "seriesName": "Irani Cup",
        "Team1Name": "Mumbai",
        "Team1SName": "MUM",
        "Team2Name": "Delhi",
        "Team2SName": "DEL",
        "scores": [
            {
                "innings": "1",
                "team": "MUM",
                "score": "537",
                "over": "140",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "DEL",
                "score": "150",
                "over": "30",
                "wkt": "3"
            }
        ]

    },
    {
        "seriesName": "World T20 Cup",
        "Team1Name": "Bangladesh",
        "Team1SName": "BNG",
        "Team2Name": "Scotland",
        "Team2SName": "SCT",
        "scores": []
    },
    {
        "seriesName": "Caribbean Premier League",
        "Team1Name": "Guyana Amazon Warriors",
        "Team1SName": "GAW",
        "Team2Name": "Saint Lucia Kings",
        "Team2SName": "SLK",
        "scores": [
            {
                "innings": "1",
                "team": "SLK",
                "score": "198",
                "over": "20",
                "wkt": "5"
            },
            {
                "innings": "2",
                "team": "GAW",
                "score": "106",
                "over": "20",
                "wkt": "4"
            }
        ]
    },
    {
        "seriesName": "Bangladesh tour of India",
        "Team1Name": "India",
        "Team1SName": "IND",
        "Team2Name": "Bangladesh",
        "Team2SName": "BNG",
        "scores": [
            {
                "innings": "1",
                "team": "BNG",
                "score": "233",
                "over": "74.2",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "IND",
                "score": "285",
                "over": "34.4",
                "wkt": "9"
            },
            {
                "innings": "3",
                "team": "BNG",
                "score": "144",
                "over": "47",
                "wkt": "10"
            },
            {
                "innings": "4",
                "team": "IND",
                "score": "98",
                "over": "17",
                "wkt": "3"
            }
        ]
    },
    {
        "seriesName": "Ireland v South Africa in UAE",
        "Team1Name": "Ireland",
        "Team1SName": "IRE",
        "Team2Name": "South Africa",
        "Team2SName": "RSA",
        "scores": [
            {
                "innings": "1",
                "team": "RSA",
                "score": "271",
                "over": "50",
                "wkt": "9"
            },
            {
                "innings": "2",
                "team": "IRE",
                "score": "132",
                "over": "31.5",
                "wkt": "10"
            }
        ]
    },
    {
        "seriesName": "Country Championship",
        "Team1Name": "Nottinghamshire",
        "Team1SName": "NOTTS",
        "Team2Name": "Warwickshire",
        "Team2SName": "WARKS",
        "scores": [
            {
                "innings": "1",
                "team": "NOTTS",
                "score": "489",
                "over": "130",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "WARKS",
                "score": "373",
                "over": "110",
                "wkt": "5"
            }
        ]
    },
    {
        "seriesName": "Australia in England",
        "Team1Name": "England",
        "Team1SName": "ENG",
        "Team2Name": "Australia",
        "Team2SName": "AUS",
        "scores": [
            {
                "innings": "1",
                "team": "AUS",
                "score": "302",
                "over": "50",
                "wkt": "7"
            },
            {
                "innings": "2",
                "team": "ENG",
                "score": "300",
                "over": "45.4",
                "wkt": "10"
            }
        ]
    },
    {
        "seriesName": "New Zealand tour of Sri Lanka",
        "Team1Name": "Sri Lanka",
        "Team1SName": "SL",
        "Team2Name": "New Zealand",
        "Team2SName": "NZ",
        "scores": [
            {
                "innings": "1",
                "team": "SL",
                "score": "602",
                "over": "150",
                "wkt": "10"
            },
            {
                "innings": "2",
                "team": "NZ",
                "score": "88",
                "over": "30",
                "wkt": "10"
            },
            {
                "innings": "3",
                "team": "NZ",
                "score": "360",
                "over": "100",
                "wkt": "10"
            }
        ]
    }

]

const MatchComponet: React.FC = () => {
    return (
        <div>
            <MatchCarousel matches={matchesData} />
        </div>
    );
};

export default MatchComponet;
