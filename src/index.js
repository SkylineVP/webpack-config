import styles from './assets/sass/style2.scss';
const data =require('src/assets/json/1.json');
const test = document.createElement('h1');

test.innerText = String(data);

test.classList.add(styles.test);


document.body.appendChild(test);



