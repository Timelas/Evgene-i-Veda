import React from "react";
import details from "../../images/Details.svg";
import greenCloud4 from "../../images/greenCloud4.png";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Мы с удовольствием и трепетом готовимся к нашему празднику! Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в палитре торжества (соблюдение дресс-кода желательно, но не обязательно).</p>
      <p className="details__text">Торжество пройдет на открытом воздухе, а погода может быть изменчива. Мы позаботимся, чтобы вам было тепло от общения и атмосферы праздника. Будем рады, если ваши образы дополнит что-то теплое для вашего уюта при необходимости.</p>
      <p className="details__text">Выбирайте удобную обувь для праздника на природе.</p>
      <p className="details__text">Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу или бутылку вина, а также мы будем рады подаркам в конвертах.</p>
      <p className="details__text">Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.</p>
      <p className="details__text">Если у Вас есть аллергия на какие-либо продукты питания, пожалуйста, сообщите нам заранее (медицинскую тайну гарантируем:))</p>
      <p className="details__text">Этот праздник нам помогают делать:<br />
            Атмосферная локация и еда: GREENVALD Парк Скандинавия (https://park-scandinavia.ru/)<br />
            Заботливо украшено: Belleza Свадебная мастерская (https://bellezadecor.ru/)<br />
            Настроение создано ведущим: Антон Матвеев (https://vk.com/matveev_me)<br />
            Все важные моменты сохранены на память:
            фотограф Елена Успенская (https://wwoostudio.ru/)<br />
            видеограф Дмитрий Юдин (https://wwoostudio.ru/video)</p>
      <img src={greenCloud4} alt="зеленое облако" className="details__cloud"></ img>
    </section>
  );
}

export default Details;