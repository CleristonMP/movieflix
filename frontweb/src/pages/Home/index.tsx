import { ReactComponent as HomeImg } from 'assets/images/home-img.svg';
import Navbar from 'components/Navbar';
import Login from "./Login";

import './styles.css';

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="container main-container">
            <div className="home-container">
                <div className="content-container">
                    <h1>Avalie Filmes</h1>
                    <p>Diga o que você achou do seu <br /> filme favorito</p>
                </div>
                <div  className="home-img-container">
                    <HomeImg/>
                </div>
            </div>
            <div>
                <Login/>
            </div>
        </div>
        </>
    );
}

export default Home;
