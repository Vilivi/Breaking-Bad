import '../../css/Detail.css';

const DetailCard = ({key, src, name, nickname, portrayed, status, birthday, category, occupations}) => {

    const occupation = occupations.join(", ");

    return (
        <div className="DetailCard" id={key}>
            <img src={src}></img>
            <p>Name: {name}</p>
            <p>Nickname: {nickname}</p>
            <p>Portrayed: {portrayed}</p>
            <p>Status: {status}</p>
            <p>Birthday: {birthday}</p>
            <p>Category: {category}</p>
            <p>Occupation: {occupation}</p>
        </div>
    );
};

export default DetailCard;