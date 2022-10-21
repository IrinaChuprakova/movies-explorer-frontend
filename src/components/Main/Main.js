import './Main.css'

function Main(){
    return(
    <main className="main">
    <section className='promo'>
    <h2 className='promo__header'> О проекте </h2>
    <div>
    <div>
        <h3 className='promo__title'>Дипломный проект включал 5 этапов</h3>
        <p className='promo__info'> Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
    </div>
    <div>
        <h3 className='promo__title'>На выполнение диплома ушло 5 недель</h3>
        <p className='promo__info'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </div>
    </div>
    <div className='promo__container'>
        <div className='progressBar'>
            <h4 className='progressBar__header'>1 неделя</h4>
            <p className='progressBar__title'>Back-end</p>
        </div>
        <div>
            <h4 className='progressBar__header'>4 недели</h4>
            <p className='progressBar__title'>Front-end</p>
        </div>
    </div>
    </section>
    <section>
        <h2 className='techs'> Технологии</h2>
        <div>
            <h3 className='techs__header'> 7 технологий </h3>
            <p className='techs__title'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__list-items'>HTML</li>
                <li className='techs__list-items'>CSS</li>
                <li className='techs__list-items'>JS</li>
                <li className='techs__list-items'>React</li>
                <li className='techs__list-items'>Git</li>
                <li className='techs__list-items'>Express.js</li>
                <li className='techs__list-items'>mongoDB</li>
            </ul>
        </div>
    </section>
    <section className='aboutme'>
        <h2 className='aboutme__header'>Студент</h2>
        <div className='aboutme__container'>
          <div className='aboutme__info'>
                <h3 className='aboutme__name'>Ирина</h3>
                <p className='aboutme__job'>Фронтенд-разработчик, 26 лет</p>
                <p className='aboutme__description'> C 2017 года работала учителем информатики. В 2022 После того, как прошла курс по веб-разработке уволилась и ищу работу.</p>
                <p className='aboutme__link'>Github</p>
          </div>
          <img className='aboutme__image' src='' /> 
        </div>
    </section>
    <section>
        <h2>Портфолио</h2>
        <ul>
            <li>Статичный сайт</li>
            <li>Адаптивный сайт</li>
            <li>Одностраничное приложение</li>
        </ul>
    </section>
    <footer>
        <h3>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div>
            <p>2022</p>
            <ul>
            <li>Яндекс.Практикум</li>
            <li>Github</li>
        </ul>
        </div>
    </footer>
    </main>
    )
}

export default Main;