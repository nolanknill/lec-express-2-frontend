import "./Contestants.scss";
import { useEffect, useState } from 'react';
import axios from "axios";
import Contestant from '../Contestant/Contestant';

const Contestants = () => {
    const [contestants, setContestants] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8080/contestants")
            .then(({ data }) => {
                setContestants(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(true);
                console.log(error);
            })
    }, []);

    if (isLoading) { return "Loading... "; }

    if (error) { return "Error fetching contestants. Check console for specific error message"; }

    return (
        <div className="contestants">
            {contestants.map((contestant) => (
                <Contestant key={contestant.id} contestant={contestant} />
            ))}
        </div>
    )
}

export default Contestants;