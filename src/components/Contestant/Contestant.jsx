import "./Contestant.scss";

const Contestant = ({ contestant }) => (
    <section className="contestant">
        <h2 className="contestant__name" >{contestant.name}</h2>
        <div className="contestant__season" >{contestant.originalSeason}</div>
        <img className="contestant__image" src={contestant.image} alt={contestant.name} />
        <div className="contestant__location">{contestant.hometown}, {contestant.country}</div>
        <div className="contestant__age">{contestant.age} years old</div>
        
    </section>  
);

export default Contestant;