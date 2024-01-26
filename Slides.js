import React, {useState} from 'react';

function Slides({slides}) {

    const [slideIndex, setSlideIndex] = useState(0);
    const startSlide=()=>{
        setSlideIndex(0)
    }
    const prevSlide=()=>{
        setSlideIndex(i => i-1)
    }
    const nextSlide=()=>{
        setSlideIndex(i => i+1)
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" disabled={slideIndex === 0} className="small outlined" onClick={() => startSlide()}>Restart</button>
                <button data-testid="button-prev" disabled={slideIndex === 0} className="small" onClick={() => prevSlide()}>Prev</button>
                <button data-testid="button-next" disabled={slideIndex === slides.length-1} className="small" onClick={() => nextSlide()}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideIndex].title}</h1>
                <p data-testid="text">{slides[slideIndex].text}</p>
            </div>
        </div>
    );

}

export default Slides;
