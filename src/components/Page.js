import React, { useEffect } from 'react';
// import { Button, TextField } from '@material-ui/core';
import CarsList from '../containers/CarsList';
import Car from '../containers/Car';

const Page = () => {
    let myMap = undefined;
    useEffect(() => {
        console.log('1234');
        const script = document.createElement('script');
      
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=15d0506a-9ee6-47c4-b5b0-b33294e759a5&lang=ru_RU";
        script.async = true;
    
        script.onload = () => {
          console.log('window.ymaps', window.ymaps);
          window.ymaps.ready(init); // Дождёмся загрузки API и готовности DOM.
        };
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      
      function init () {
          // Создание экземпляра карты и его привязка к контейнеру с
          // заданным id ("map").
          myMap = new window.ymaps.Map('map', {
              // При инициализации карты обязательно нужно указать
              // её центр и коэффициент масштабирования.
              center: [55.76, 37.64], // Москва
              zoom: 10
          }, {
              searchControlProvider: 'yandex#search'
          });
      }


    //   if (window.ymaps) {

    //   };
                
     return <div>
        <h2>CarsList:</h2>
        <CarsList />
        <hr />
        <h2>Car:</h2>
        <Car />
        {myMap && <div>
            {myMap}
        </div>}
        <div id="map" style={{ width: '450px', height: '350px' }}></div> 
    </div>};

export default Page;
