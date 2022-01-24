import SeasonDetails from "../SeasonDetails/SeasonDetails"
import EpisodesCarousel from "../EpisodesCarousel/EpisodesCarousel"
import janeBG from '../../../images/janeBG.jpeg'
import '../season.scss'

const SeasonOverview = ({show, season, onEpisodeChange}) => {

    return (
        <div className="SeasonOverview" style={{backgroundImage: `url(${janeBG})`}}>
            <SeasonDetails show={show} season={season} />
            <EpisodesCarousel season={season} onEpisodeChange={onEpisodeChange} />
        </div>
    )
}

export default SeasonOverview