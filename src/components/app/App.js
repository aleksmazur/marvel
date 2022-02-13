import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import RandomChar from '../randomChar/RandomChar';

import decoration from '../../resources/img/first_bg.png';
import Skeleton from '../skeleton/Skeleton';
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';
import SingleComic from '../singleComic/SingleComic';

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList/>
          <CharInfo/>
        </div>
        <Skeleton/>
        <img src={decoration} alt="" className="bg-decoration" />
      </main>
      <AppBanner/>
      <ComicsList/>
      <SingleComic/>
    </div>
  )
}

export default App;