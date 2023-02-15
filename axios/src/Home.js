import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function Home() {
   
  return (
    <div className="App">

        <br /><br />
        
        Ana Sayfa
        
        <br /><br /><br /><br />
        
        <Link to="/">Ana Sayfa</Link> &nbsp;
        <Link to="/login">Login</Link> &nbsp;
        <Link to="/logout">Logout</Link> &nbsp;
        <Link to="/users">Kullanıcılar</Link> &nbsp;
        <Link to="/secret-page">Gizli Sayfa</Link>

    </div>
  );
}

export default Home;
