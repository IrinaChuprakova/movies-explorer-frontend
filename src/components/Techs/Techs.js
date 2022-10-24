import './Techs.css';

function Techs(){
    return(
        <section className="techs">
        <div className="techs__container">
            <h2 className="techs__header"> Технологии</h2>
            <h3 className="techs__title"> 7 технологий </h3>
            <p className="techs__about">На курсе веб-разработки мы освоили технологии, которые применили <br /> в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__list-items">HTML</li>
                <li className="techs__list-items">CSS</li>
                <li className="techs__list-items">JS</li>
                <li className="techs__list-items">React</li>
                <li className="techs__list-items">Git</li>
                <li className="techs__list-items">Express.js</li>
                <li className="techs__list-items">mongoDB</li>
            </ul>
        </div>
    </section>
    )
}
export default Techs;