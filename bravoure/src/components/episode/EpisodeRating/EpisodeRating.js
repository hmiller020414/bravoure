import '../episode.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const EpisodeRating = ({rating}) => {

    return (
        <div className="EpisodeRating">
            <FontAwesomeIcon icon={faStar} className="EpisodeRating-Star" />
            {rating == 'N/A' ? <p><b>N/A</b></p> : <p><b>{rating}</b>/10</p> }
        </div>
    )
}

export default EpisodeRating