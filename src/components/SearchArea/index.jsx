import { useCard } from '../../contexts/cardsContext';
import SearchImg from '../../assets/search_black_24dp.svg';
import './styles.scss';

export function SearchArea() {
    const {searchValue, setSearchValue} = useCard();

    return(
        <div className="search_area_content">
            <div className="search_area">
                <input type="text" placeholder="Pesquise por termos ou categorias" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button>
                    <img src={SearchImg} alt="Search" />
                </button>
            </div>
        </div>
    )
}