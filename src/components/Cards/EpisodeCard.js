const EpisodeCard = ({ title, season, episode, characters }) => {

    return (
        <div>
            <h5>Breaking Bad S{season}/E{episode} => {title}</h5>
            <p>CharacterList: <br />
                {characters.map(value => {
                    return (<><a href={value}>{value}</a>,{" "}</>);
                })}
            </p>
        </div>
    );
};

export default EpisodeCard;