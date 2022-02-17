import {Component} from 'react';
import './charList.scss';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (charList) => {
        this.setState({charList, loading: false})
    }

    onError = () => {
        this.setState({error: true, loading: false})
    }

    render() {
        const {charList, loading, error} = this.state;

        const items = charList.map(item => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
               imgStyle = {'objectFit': 'contain'};
            }

            return (
                <li key={item.id} onClick={() => this.props.onCharSelected(item.id)} className="char__item">
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">LOAD MORE</div>
                </button>
            </div>
        )    
    }
}

export default CharList;