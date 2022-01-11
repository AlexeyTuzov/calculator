import React, {FC} from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
//import Routes from './components/Routes/Routes';

const App: FC = () => {
    return (
        <div className="App" title='App'>
            <Header/>
            <Card />
            <Footer/>
        </div>
    );
}

export default App;
