import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe(){
     return(
        <section className="aboutme">
        <h2 className="aboutme__header">Студент</h2>
        <div className="aboutme__container">
            <div className="aboutme__info">
                <h3 className="aboutme__name">Ирина</h3>
                <p className="aboutme__job">Фронтенд-разработчик, 26 лет</p>
                <p className="aboutme__description"> В 2017 году законила ПензГТУ по направлению подготовки Професиональное обучение по отраслям (информатика и вычислительная техника). С 2017 года работала учителем информатики в МБОУ СОШ №11 г.Пензы. В 2022 после прохождения курса по веб-разработке ушла с постоянной работы. </p>
                <a className="aboutme__link" href="https://github.com/IrinaChuprakova" target="_blank">Github</a>
            </div>
            <img className="aboutme__image" src={photo} alt="Фото" />
        </div>
    </section>
     )
}
export default AboutMe;