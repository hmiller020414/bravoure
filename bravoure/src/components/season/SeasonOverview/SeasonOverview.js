import SeasonDetails from "../SeasonDetails/SeasonDetails"
import EpisodesCarousel from "../EpisodesCarousel/EpisodesCarousel"
import janeBG from '../../../images/janeBG.jpeg'

const SeasonOverview = ({show}) => {

    return (
        <div>
            <SeasonDetails show={show} />
            <EpisodesCarousel />
            <img src={janeBG} alt="Jane" />
        </div>
    )
}

export default SeasonOverview