import './AboutProject.css';

function AboutProject(){
    return(
        <section className="project-about">
        <h2 className="project-about__header"> О проекте </h2>
        <div className="project-about__container">
            <h3 className="project-about__title">Дипломный проект включал 5 этапов</h3>
            <p className="project-about__info"> Составление плана, работу над бэкендом, вёрстку, добавление <br/> функциональности и финальные доработки.</p>
            <h3 className="project-about__title">На выполнение диплома ушло 5 недель</h3>
            <p className="project-about__info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было <br /> соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="progressbar">
            <h4 className="progressbar__header progressbar__header_back">1 неделя</h4>
            <h4 className="progressbar__header progressbar__header_front">4 недели</h4>
            <p className="progressbar__title">Back-end</p>
            <p className="progressbar__title">Front-end</p>
        </div>
    </section>
    )
}
 export default AboutProject;