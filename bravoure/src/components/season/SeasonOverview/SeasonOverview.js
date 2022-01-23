import SeasonDetails from "../SeasonDetails/SeasonDetails"
import EpisodesCarousel from "../EpisodesCarousel/EpisodesCarousel"
import janeBG from '../../../images/janeBG.jpeg'

const SeasonOverview = ({show, season}) => {

    return (
        <div>
            <SeasonDetails show={show} season={season} />
            <EpisodesCarousel season={season} />
            <img src={janeBG} alt="Jane" />
        </div>
    )
}

export default SeasonOverview