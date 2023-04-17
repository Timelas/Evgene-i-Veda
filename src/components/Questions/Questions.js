import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import greenCloud from "../../images/greenCloud6.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <img src={question} alt="rsvp" className="question__header"></ img>
      { isFormVisible ?
        <div className="question__container">
          <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов</p>
          <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
          <p className="question__string">
            <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
            <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
          </p>
          <fieldset className="question__string">Предпочтения по еде:
            <label  htmlFor="chicken" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Еда" value="Курица" id="chicken"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Курица</span>
            </label>
            <label htmlFor="pork" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Еда" value="Свинина" id="pork"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Свинина</span>
            </label>
          </fieldset>
          <fieldset className="question__string">Пожелания по алкоголю::
            <label  htmlFor="sparkling" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Игристое вино" id="sparkling"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Игристое вино</span>
            </label>
            <label htmlFor="white" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Белое вино" id="white"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Белое вино</span>
            </label>
            <label htmlFor="red" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Красное вино" id="red"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Красное вино</span>
            </label>
            <label htmlFor="congnac" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Коньяк" id="congnac"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Коньяк</span>
            </label>
            <label htmlFor="vodka" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Водка" id="vodka"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Водка</span>
            </label>
            <label htmlFor="rum" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Ром" id="rum"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Ром</span>
            </label>
            <label htmlFor="gin" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Джин" id="gin"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Джин</span>
            </label>
            <label htmlFor="noalco" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Алкоголь" value="Безалкогольные напитки" id="noalco"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Безалкогольные напитки</span>
            </label>
          </fieldset>
          <fieldset className="question__string">Понадобится ли вам трансфер:
            <label  htmlFor="yes-transfer" className="question__label">
              <input className="question__unvisible" type="radio" name="Трансфер" value="Нужен" id="yes-transfer"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Да</span>
            </label>
            <label className="question__label" htmlFor="no-transfer">
              <input className="question__unvisible" type="radio" name="Трансфер" value="Нужен" id="no-transfer"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Нет</span>
            </label>
          </fieldset>
          <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отправить"}</button>
          <img src={greenCloud} alt="зеленое облако" className="question__cloud"></ img>
        </form> 
      </div>
      :
      <p className="question__text">Форма отправлена!</p>
      }
    </section>
  );
}

export default Questions;