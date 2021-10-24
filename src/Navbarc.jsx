import {Link} from"react-router-dom";
import "./Nav.css"
function Navbarc(){
return(
<div className=" px-5 py-2 navcont text-white ">
 <h4 className="w-25 mb-0">logo</h4>
<ul className="w-75 list-unstyled mb-0">
<li className="mx-3"><Link className="text-decoration-none text-white" to="/">Home</Link></li>
<li className="mx-3 "><Link className="text-decoration-none text-white" to="/Shop">Shop</Link></li>
<li className="mx-3 text-decoration-none"><Link className="text-white text-decoration-none" to="/counter">Counter</Link></li>
<li className="mx-3 text-decoration-none"><Link className="text-white text-decoration-none" to="/todo">Todo-list</Link></li>
<li className="mx-3 text-decoration-none"><Link className="text-white text-decoration-none" to="/login">login</Link></li>
<li className="mx-3 text-decoration-none"><Link className="text-white text-decoration-none" to="/regist">Registration</Link></li>
</ul>
  </div>


     
)
}

export default Navbarc;