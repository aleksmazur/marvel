import './singleComic.scss';
import xmen from '../../resources/img/x_men.png';

const SingleComic = () => {
    return (
        <div className="single__comic">
            <img src={xmen} alt="xmen" className="single__comic-img"/>
            <div className="single__comic-info">
                <h2 className="single__comic-name">X-Men: Days of Future Past</h2>
                <p className="single__comic-descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className="single__comic-descr">144 pages</p>
                <p className="single__comic-descr">Language: en-us</p>
                <div className="single__comic-price">9.99$</div>
            </div>
            <a href="#" className="single__comic-back">Back to all</a>
        </div>
    )
}

export default SingleComic;