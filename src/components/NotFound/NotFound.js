import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound(){
    const history = useHistory();
    return(
        <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__info">Страница не найдена</p>
        <button onClick={() => history.go(-2)} className="not-found__link" type='button'> Назад </button>
        </section>
    )
}

export default NotFound;