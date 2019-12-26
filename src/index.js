import styles from './assets/sass/style2.scss';

const test = document.createElement('h1');

test.innerText = 'Webpack is Awesome!';

test.classList.add(styles.test);


document.body.appindChild(test);



