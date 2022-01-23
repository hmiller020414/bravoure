import CarouselSlide from "../CarouselSlide/CarouselSlide"

const EpisodesCarousel = ({season}) => {

    const seasonEpisodes = season?.Episodes
    const slides = seasonEpisodes?.length
        ? seasonEpisodes.map (ep =>
            <CarouselSlide key={ep.Episode} episode={ep.Episode} />
            )
        : null;

    return (
        <div>
            <h4>Episodes Carousel will go here</h4>
            {slides}
        </div>
    )
}

export default EpisodesCarousel