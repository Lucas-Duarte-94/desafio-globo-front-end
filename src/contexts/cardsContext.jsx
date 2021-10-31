import { createContext, useContext, useState } from "react";
import axios from 'axios';

export const CardContext = createContext({});

export function CardContextProvider(props) {
    const [searchValue, setSearchValue] = useState('');
    const [cards, setCards] = useState([]);
    const [tags, setTags] = useState([]);

    async function getInfo() {
        let cardRes = await axios.get('/api/cards/')
        setCards(cardRes.data)
        let tagRes = await axios.get('api/tags/')
        setTags(tagRes.data)

        return {cardRes, tagRes};
    }

    return (
        <CardContext.Provider value={{searchValue, setSearchValue, getInfo, cards, tags}}>
            {props.children}
        </CardContext.Provider>
    )
}

export function useCard() {  
    return useContext(CardContext);
  }