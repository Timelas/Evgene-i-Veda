import React from "react";
import dear from "../../images/dear.svg";
import background from "../../images/forest.png";
import where from "../../images/where.svg";
import banquet from "../../images/banquet.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <img src={background} alt="облака" className="info-date__background"></ img>
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Дорогие родные и друзья" src={dear}></img>
        <p className="info-date__text">Так далеко все зашло - мы женимся! Это очень радостное и волнительное для нас событие.
И мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди. Будем рады разделить с вами уютный праздник на природе в день нашей свадьбы. </p>
      </div>
      <div className="info-date__info" id="place">
        <p className="info-date__text">Ждем вас:</p>
      </div>
      <div className="info-date__place">
        <div className="info-date__check-in">
          <img className="info-date__where" alt="торжественная регистрация" src={where}></img>
          <p className="info-date__day">19.07.23</p>
          <p className="info-date__text">Дворец Бракосочетаяния № 2 <br /> Санкт-Петербург, ул. Фурштатская, д. 52 <br />Посещение по желанию</p>
          <p className="info-date__text">Сбор гостей в 20:30</p>
        </div>
        <div className="info-date__check-in info-date__check-in-two">
          <img className="info-date__where" alt="праздничный банкет" src={banquet}></img>
          <p className="info-date__day">21.07.23</p>
          <p className="info-date__text">GREENVALD Парк Скандинавия<br />Ленинградская область, пос. Горки, ул. Озерная 1А<br />Сбор гостей в 14:00</p>
          <p className="info-date__text">Окончание праздника в 21:00</p>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;