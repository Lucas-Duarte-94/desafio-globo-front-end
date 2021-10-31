import { useHistory } from 'react-router';
import BackArrow from '../../assets/arrow_back_black_24dp.svg';

import './styles.scss';

export function CreateInsightHeader() {
    const history = useHistory();

    return (
        <div className="header_insight_content">
            <button onClick={() => history.push('/')}>
                <img src={BackArrow} alt="Voltar" />
            </button>
            <div>
                <h2>CRIAR <strong>INSIGHT</strong></h2>
                
            </div>
        </div>
    )
}