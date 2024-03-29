import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__box">
          <p className="footer__copyright">&#169;2022</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://practicum.yandex.ru/web/" target="_blank" className='footer__link'>Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item">
              <a href="https://github.com/IrinaChuprakova" target="_blank" className='footer__link'>Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
