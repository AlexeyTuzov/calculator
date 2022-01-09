import React, {FC} from "react";

const Card: FC = () => {
    return (
        <div className='row'>
            <div className='col s12 m8 l6 xl4'>
                <div className='card indigo darken-1 z-depth-4'>
                    <div className='card-content text-lighten-2'>
                      <span className='card-title center-align'>
                          Welcome to currencies calculator!
                      </span>
                        <p>
                            Here You can convert one currency to another one or check for chosen currency's rate
                        </p>
                    </div>
                    <div className='card-action'>
                        <a className='s6' title='converter'>Link 1</a>
                        <a className='s6' title='courses'>Link 2</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
