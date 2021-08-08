import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import DetailCard from '../Cards/DetailCard';


const Detail = () => {

    const dataname = useParams();
    console.log(dataname);


    const[data, setData] = useState([]);

    useEffect (() => {
        const pushFunction = (data) => {
            const tempArray =[];
            console.log(data);
            for(let i=0; i < data.length; i++){
                tempArray.push(data.map((value) => {
                    return <DetailCard
                        key={value.char_id}
                        src={value.img}
                        name={value.name}
                        birthday={value.birthday}
                        category={value.category}
                        nickname={value.nickname}
                        occupations={value.occupation}
                        portrayed={value.portrayed}
                        status={value.status}
                    />;
                }));
            }
            return tempArray;
        }

        const asyncFunction = async () => {
            const baseURL="https://www.breakingbadapi.com/api/characters?name=";
            const data = await fetch(`${baseURL}${dataname.name}`);
            const dataJson = await data.json();
            console.log(dataJson);
            setData(pushFunction(dataJson));
        }
        asyncFunction();
    }, []);

    return (
        <div>{data}</div>
    );
}

export default Detail;