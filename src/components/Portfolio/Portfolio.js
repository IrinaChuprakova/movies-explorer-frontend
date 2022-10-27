import './Portfolio.css';
import link from '../../images/link.svg';
import { Link } from 'react-router-dom';

function Portfolio(){
    return(
        <section className="portfolio">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__list">
            <li className="portfolio__list-item"> <a className="portfolio__link" target="_blank" href="https://github.com/IrinaChuprakova/how-to-learn"> Статичный сайт </a> <img src={link} /></li>
            <li className="portfolio__list-item"> <a className="portfolio__link" target="_blank" href="https://github.com/IrinaChuprakova/IrinaChuprakova.github.io"> Адаптивный сайт </a> <img src={link} /></li>
            <li className="portfolio__list-item"> <a className="portfolio__link" target="_blank" href="https://github.com/IrinaChuprakova/react-mesto-api-full"> Одностраничное приложение</a> <img src={link} /></li>
        </ul>
    </section>
    )
}


export default Portfolio;