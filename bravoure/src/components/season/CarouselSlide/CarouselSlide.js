import { useEffect, useState } from 'react'
import OMDB from '../../../services/OMDB';
import '../season.scss'

const CarouselSlide = ({episode}) => {

    const [episodeData, setEpisodeData] = useState()

    useEffect( async () => {
        const results = await OMDB.episode(4, episode)
        setEpisodeData(results)
    }, []);

    return (
        <div className="CarouselSlide">
            <img src={episodeData?.Poster} alt={episodeData?.Title} />
            <h4>{episodeData?.Title}</h4>
            <p>{episodeData?.Plot}</p>
            <div className="CarouselSlide-EpNum">{episodeData?.Episode}</div>
        </div>
    )
}

export default CarouselSlide