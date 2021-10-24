import './App.css';
import Counter from './Counter';
import Navbarc from './Navbarc';
import Home from './Home';
import Shop from './Shop';
import Register from './RegistComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ProductDetails from "./ProductDetails"
import Todo from './ToDocomponent'
import Login from "./Login"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<Router>
<div className="App">
<Navbarc/>
<Switch>
<Route component={Counter} path="/counter" />;
<Route component={Todo} path="/todo" />;
<Route component={Shop} path="/Shop" exact/>;
<Route component={ProductDetails} path="/Shop/:id" exact/>;
<Route component={Register} path="/regist" exact/>;
<Route component={Login} path="/login" exact/>;
<Route component={Home} path="/" exact/>;
</Switch>
</div>
</Router>
  );
  };

export default App;
