import './Portfolio.css';
import link from '../../images/link.svg';

function Portfolio(){
    return(
        <section className="portfolio">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__list">
            <li className="portfolio__list-item"> <a> Статичный сайт </a> <img src={link} /></li>
            <li className="portfolio__list-item"> <a> Адаптивный сайт </a> <img src={link} /></li>
            <li className="portfolio__list-item"> <a> Одностраничное приложение</a> <img src={link} /></li>
        </ul>
    </section>
    )
}


export default Portfolio;