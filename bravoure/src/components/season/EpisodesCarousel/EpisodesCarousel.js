import CarouselSlide from "../CarouselSlide/CarouselSlide"
import '../season.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const EpisodesCarousel = ({season, onEpisodeChange}) => {

    const seasonEpisodes = season?.Episodes
    const slides = seasonEpisodes?.length
        ? seasonEpisodes.map (ep =>
            <CarouselSlide key={ep.Episode} episode={ep.Episode} onEpisodeChange={onEpisodeChange} />
            )
        : null;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(false)

    useEffect(() => {
        setLength((seasonEpisodes?.length * 200) + ((seasonEpisodes?.length - 1) * 28))
    }, [seasonEpisodes])

    useEffect(() => {
        checkIdx()
    }, [currentIndex])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const checkIdx = () => {
        if (currentIndex == 0) {
            setPrevBtnDisabled(true)
        } else if (currentIndex == seasonEpisodes?.length - 1) {
            setNextBtnDisabled(true)
        } else if (seasonEpisodes?.length <= 1) {
            setPrevBtnDisabled(true)
            setNextBtnDisabled(true)
        } else {
            setPrevBtnDisabled(false)
            setNextBtnDisabled(false)
        }
    }

    return (
        <div className="EpisodesCarousel">
            <div 
                className="EpisodesCarousel-Inner"
                style={{ transform: `translateX(-${currentIndex * 228}px)` }}
            >
                {slides}
            </div>
            <div className="EpisodesCarousel-Btns">
                <button 
                    className="EpisodesCarousel-Btn Prev"
                    onClick={prev}
                    disabled={prevBtnDisabled}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button 
                    className="EpisodesCarousel-Btn Next"
                    onClick={next}
                    disabled={nextBtnDisabled}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default EpisodesCarousel