import './styles.scss';
import ShowMore from './../../assets/more_horiz_black_24dp.svg';
import { useEffect, useState } from 'react';
import { useCard } from '../../contexts/cardsContext';

export function CardsList() {
    const [publication, setPublication] = useState([]);
    const [windowSize, setWindowSize] = useState(window.innerHeight);
    const [next, setNext] = useState(0);
    const [gap, setGap] = useState(0);
   
    const { searchValue, getInfo } = useCard();

    function updateWindowSize() {
        setWindowSize(window.innerHeight)
    }

    const getData = async (p = 0, n = 0 ) => {
        let cardRes = (await getInfo()).cardRes
        let tagRes = (await getInfo()).tagRes
        let mappedCards = cardRes.data.map(e => {
            let tagName = tagRes.data.find(element => element.id === e.tags)
            
            let organizedData = {
                key: e.id,
                texto: e.texto,
                dataCriacao: e.data_criacao,
                dataModificacao: e.data_modificacao,
                tag: tagName.name
            }

            return organizedData;
        })
        let gapVal = 0;
        if (windowSize > 1100) {
            gapVal = 4
            setGap(4)
        }else if (windowSize > 750) {
            gapVal = 3
            setGap(3)
        }else if (windowSize > 630) {
            gapVal = 2
            setGap(2)
        }else {
            gapVal = 1
            setGap(1)
        }

        let sliced = mappedCards.slice(n, n + gapVal)

        setPublication(sliced)   
    }

    function handleLoadPublications() {
        setNext(next + gap);

        getData(next, next + gap)
    }

    useEffect(() => {
        getData()

        window.addEventListener('resize', updateWindowSize)
        return () => window.removeEventListener('resize', updateWindowSize)

    }, [window.innerHeight])

    return(
        <div className="main_content">
            <h2>Feed de <strong>Insights</strong></h2>

            {publication.filter(element => {
                if (element === '') {
                    return element
                }else if (element.texto.toLowerCase().includes(searchValue.toLowerCase())) {
                    return element
                }
            }).map(publi => {
                return (
                    <div className="card" key={publi.key}>
                        <p>{publi.texto}</p>
                        {publi.tag === '' ?
                            ''
                            :
                            <button>{publi.tag}</button>
                        }
                    </div>
                )
            })}

            <button className="load_content" onClick={handleLoadPublications}>
                <img src={ShowMore} alt="exebir mais" />
                <span>Toque para exibir mais insights</span>
            </button>

        </div>
    )
}