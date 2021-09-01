import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Products/ProductList";
import SingleItem from "./components/SingleItem/SingleItem";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />

            <Route exact path="/product/:productId" component={SingleItem} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
