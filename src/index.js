import './assets/css/styles.css';
import YoImage from './assets/images/yo.jpg';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack'
  
    const myIcon = new Image();

    myIcon.src = YoImage;
  
  
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());