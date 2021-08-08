import React, {useState, useEffect} from 'react';
import EpisodeCard from '../Cards/EpisodeCard';

const Episodes = () => {

    const[data, setData] = useState([]);

    useEffect (() => {
        const pushFunction = (data) => {
            const tempArray =[];
            console.log(data);
            for(let i=0; i < data.length; i++){
                tempArray.push(data.map((value, id) => {
                    return <EpisodeCard 
                    key={id}
                    title={value.title} 
                    season={value.season} 
                    episode={value.episode} 
                    characters={value.characters} />;
                }));
            }
            return tempArray;
        }

        const asyncFunction = async () => {
            const data = await fetch("https://www.breakingbadapi.com/api/episodes");
            const dataJson = await data.json();
            setData(pushFunction(dataJson));
        }
        asyncFunction();
    }, []);

    return (
        <div>{data}</div>
    );
}

export default Episodes;