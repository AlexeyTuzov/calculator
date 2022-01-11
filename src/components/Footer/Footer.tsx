import React, {FC} from "react";
import logoReact from '../../logo.svg';

const Footer: FC = () => {
    return (
      <footer>
          <span>
              Powered by React
          </span>
          <img title='Logo' src={logoReact} alt='JS' />
      </footer>
    );
}

export default Footer;
