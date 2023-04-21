import './Portfolio.css';
import link from '../../images/link.svg';
import { Link } from 'react-router-dom';

function Portfolio(){
    return(
        <section className="portfolio">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__list">
            <li className="portfolio__list-item"> <a className="portfolio__link" target="_blank" href="https://github.com/IrinaChuprakova/how-to-learn"> <p className="portfolio__link-text">Статичный сайт</p> <img src={link} alt="Иконка стрелки"/></a></li>
            <li className="portfolio__list-item"> <a className="portfolio__link" target="_blank" href="https://github.com/IrinaChuprakova/IrinaChuprakova.github.io"> <p className="portfolio__link-text">Адаптивный сайт</p> <img src={link} alt="Иконка стрелки"/></a></li>
            <li className="portfolio__list-item"> <a className="portfolio__link" target="_blank" href="https://github.com/IrinaChuprakova/react-mesto-api-full"> <p className="portfolio__link-text">Одностраничное приложение</p> <img src={link} alt="Иконка стрелки"/></a></li>
        </ul>
    </section>
    )
}


export default Portfolio;