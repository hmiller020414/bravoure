import SeasonDetails from "../SeasonDetails/SeasonDetails"
import EpisodesCarousel from "../EpisodesCarousel/EpisodesCarousel"
import janeBG from '../../../images/janeBG.jpeg'
import '../season.scss'

const SeasonOverview = ({show, season}) => {

    return (
        <div className="SeasonOverview">
            <SeasonDetails show={show} season={season} />
            <EpisodesCarousel season={season} />
            <img src={janeBG} alt="Jane" />
        </div>
    )
}

export default SeasonOverview