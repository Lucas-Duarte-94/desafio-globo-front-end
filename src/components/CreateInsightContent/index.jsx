import { useEffect, useState } from 'react';
import './styles.scss';
import CloseImg from '../../assets/close_black_24dp.svg'
import axios from 'axios';
import { useCard } from '../../contexts/cardsContext';

export function CreateInsightContent() {
    const [insight, setInsight] = useState('');
    const [category, setCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const { tags, getInfo } = useCard();

    async function handleSubmit() {
        let fd = new FormData()
        fd.append('texto', insight);
        fd.append('tags', selectedItem);

        await axios.post('http://localhost:8000/api/create-card/', fd);
        setInsight('');
        setSelectedItem('');
        getInfo()
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className="create_insight_content">
            <form className="content">
                <span>INSIGHT</span>
                <textarea maxLength='400' cols="30" rows="10" placeholder="Escreva aqui o seu insight..." value={insight} onChange={e => setInsight(e.target.value)} />
                <span className="max_char">limite de caracteres: 400</span>

                <span className="category">CATEGORIA</span>
                {selectedItem ?
                    <div className="category-area">
                        <div className="picked-category">
                            <span>
                                {selectedItem}
                            </span>
                            <img src={CloseImg} alt="Desmarcar" onClick={e => setSelectedItem('')} />
                        </div>
                    </div>
                    :
                    <textarea placeholder="Adicione uma categoria (opcional)..." value={category} onChange={e => setCategory(e.target.value)} />
                }
                
                <ul>
                    {tags.filter(element => {
                        if (category === '') {
                            return
                        }
                        else if (element.name.toLowerCase().includes(category.toLowerCase()) && element.name !== '') {
                            return element
                        }
                    }).map(obj => {
                        return (
                            <li onClick={e => {
                                setSelectedItem(obj.name)
                                console.log(obj.name)
                                setCategory('')
                            }}>
                                {obj.name}
                            </li>
                        )
                    })}
                </ul>
            </form>
                    
            <div className="btn_area">
                <div className="publish">
                    <button onClick={handleSubmit}>PUBLICAR</button>
                </div>
            </div>
        </div>
    )
}