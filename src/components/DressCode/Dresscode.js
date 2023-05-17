import React from "react";
import dresscode from "../../images/DressCode.svg";
import greenCloud3 from "../../images/greenCloud3.png";
import birds from "../../images/birds.svg";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={greenCloud3} alt="зеленое облако" className="dresscode__cloud"></ img>
      <img src={birds} alt="птицы" className="dresscode__birds"></ img>
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Мы с удовольствием и трепетом готовимся к нашему празднику! Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в пастельной палитре торжества (соблюдение дресс-кода желательно, но не обязательно):</p>
      <div className="dresscode__colors">
        <div className="dresscode__color dresscode__color_var_one"></div>
        <div className="dresscode__color dresscode__color_var_two"></div>
        <div className="dresscode__color dresscode__color_var_three"></div>
        <div className="dresscode__color dresscode__color_var_four"></div>
        <div className="dresscode__color dresscode__color_var_five"></div>
      </div>
    </section>
  );
}

export default Dresscode;