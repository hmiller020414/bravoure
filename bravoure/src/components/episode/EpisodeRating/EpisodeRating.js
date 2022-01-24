import '../episode.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const EpisodeRating = ({rating}) => {

    return (
        <div className="EpisodeRating">
            <FontAwesomeIcon icon={faStar} className="EpisodeRating-Star" />
            <p><b>{rating}</b>/10</p>
        </div>
    )
}

export default EpisodeRating