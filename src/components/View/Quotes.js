import QuoteCard from '../Cards/QuotesCard';
import React, {useEffect, useState} from 'react';
import '../../css/Quotes.css';

const Quotes = () => {

    const[data, setData] = useState([]);

    useEffect (() => {
        const pushFunction = (data) => {
            const tempArray =[];
            for(let i=0; i < data.length; i++){
                tempArray.push(data.map(value => {
                    return <QuoteCard 
                        key={value.quote_id}
                        text={value.quote}
                        author={value.author}
                    />;
                }));
            }
            return tempArray;
        }

        const asyncFunction = async () => {
            const data = await fetch("https://www.breakingbadapi.com/api/quotes");
            const dataJson = await data.json();
            setData(pushFunction(dataJson));
        }
        asyncFunction();
    }, []);

    return (
        <div className="Quotes">{data}</div>
    );
}

export default Quotes;