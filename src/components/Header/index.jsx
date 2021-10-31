import './styles.scss';
import InsightsLogo from '../../assets/brand-insights@3x.svg';
import AddIcon from '../../assets/add_black_24dp.svg';
import { useHistory } from 'react-router';
// import { useState } from 'react';

export function Header() {
    // const [image, setImage] = useState();
    // Como a imagem de avatar seria dado provavelmente por uma url do banco de dados,
    // a url seria passada para o estado "image", após fazer uma requisição ao servidor.
    // E essa requisição pode estar dentro de um useEffect para assim que a página for carregada,
    // receba a url da imagem

    const history = useHistory();

    return (
        <div className="header_content">
            <div className="inline_header">
                <img src={InsightsLogo} alt="Insight" className="insights_logo" />

                <div className="avatar_image_place">
                    {/* <img src={image} alt="avatar" />  local para inserir a imagem de perfil do usuário */}
                </div>

                <button className="add_button_area" onClick={() => history.push('/create-insight')}>
                    <img src={AddIcon} alt="Adicionar" className="add_button" />

                </button>
            </div>
            <div className="user_info">
                <h2>Olá, Antonio!</h2>
                <span>antonio.pina@g.globo</span>
            </div>
        </div>
    )
}