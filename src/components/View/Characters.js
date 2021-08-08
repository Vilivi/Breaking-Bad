import { useEffect, useState } from "react";
import CharacterCard from '../Cards/CharacterCard';


const Characters = () => {

    const[data, setData] = useState([]);

    useEffect (() => {
        const pushFunction = (data) => {
            const tempArray =[];
            for(let i=0; i < data.length; i++){
                tempArray.push(data.map(value => {
                    return <CharacterCard key={value.char_id} name={value.name} src={value.img} />;
                }));
            }
            return tempArray;
        }

        const asyncFunction = async () => {
            const data = await fetch("https://www.breakingbadapi.com/api/characters");
            const dataJson = await data.json();
            setData(pushFunction(dataJson));
        }
        asyncFunction();
    }, []);

    return (
        <div class="scroller">{data}</div>
    );
}

export default Characters;