import { Header }  from '../components/Header';
import { CardsList } from '../components/CardsList';
import { SearchArea } from '../components/SearchArea';

export function ShowCards() {
    return (
        <>
            <Header />
            <CardsList />
            <SearchArea />
        </>
    )
}