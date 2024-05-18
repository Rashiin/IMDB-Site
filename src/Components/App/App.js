import { useState } from "react";
import Home from "../../Pages/Home/Home";
import Card from "../Card/Card";
import Crud from "../Exclusive/Crud";
import Exclusive from "../Exclusive/Exclusive";
import Fan from "../Fan/Fan";
import FirstPart from "../FirstPart/FirstPart";
import Header from "../Header/Header";
import Top from "../Top/Top";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from "../News/News";
import Crud2 from "../News/Crud2";
import Footer from "../Footer/Footer";
import Famous from "../Redux/Famous/Famous";
import { Provider } from 'react-redux';
import store from '../Redux/Store'; 
import Overview from "../Overview/Overview";
function App() {
  const [crudPage, setCrudPage] = useState(false);

  return (
    //Lets Start Final Project : Rashin Gholijani Farahani
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
            <Top />
            <Fan />
            <Overview/>
            <Exclusive />
            <News />
            <Provider store={store}>
      <Famous />
    </Provider>
            <Footer/>
          </Route>
          <Route path="/crud" component={Crud} />
          <Route path="/crud2" component={Crud2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
