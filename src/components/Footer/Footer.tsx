import React, {FC} from "react";
import logoReact from '../../logo.svg';
import s from './Footer.module.css';

const Footer: FC = () => {
    return (
      <footer>
          <span>
              Powered by React
          </span>
          <img className={s.img} title='Logo' src={logoReact} alt='JS' />
      </footer>
    );
}

export default Footer;
