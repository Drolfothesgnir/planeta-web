import React from 'react';
import Container from '../../UtilityComponents/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from './MainMenu/MainMenu';
import imageSrc from '../../../assets/images/web-word.png';
import classes from './Main.module.less';

function Main() {
  return (
    <main className={`${classes.mainContent} fc`}>
      <Container>
        <div className={classes.mainInner}>
          <div className={classes.mainLogo}>
            <img src={imageSrc} alt="main-logo" />
          </div>
          <div className={classes.mainText}>
            <p>
              Мы знаем, что кратчайший путь к развитию прибыльного бизнеса –
              реализация нестандартных решений, при использовании новейших
              технологий. Каждый сайт – эксклюзив, а конкурентоспособность
              Вашего бизнеса – вопрос нашей репутации.
            </p>
          </div>
          <button className={classes.formToggle}>
            <span>Напишите нам</span>
            <FontAwesomeIcon icon="long-arrow-alt-right" />
          </button>
        </div>
      </Container>
      <MainMenu />
    </main>
  );
}

export default Main;
