import './Promo.css';
import promo from '../../images/promo.svg';

function Promo(){
    return(
        <section className="promo">
        <div className="promo__container">
            <h1 className="promo__title"> Учебный проект студента факультета Веб-разработки. </h1>
            <img src={promo} className="promo__img" />
        </div>
    </section>
    )
}

export default Promo;