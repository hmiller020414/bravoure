import CarouselSlide from "../CarouselSlide/CarouselSlide"
import '../season.scss'

const EpisodesCarousel = ({season}) => {

    const seasonEpisodes = season?.Episodes
    const slides = seasonEpisodes?.length
        ? seasonEpisodes.map (ep =>
            <CarouselSlide key={ep.Episode} episode={ep.Episode} />
            )
        : null;

    return (
        <div className="EpisodesCarousel">
            {slides}
        </div>
    )
}

export default EpisodesCarousel