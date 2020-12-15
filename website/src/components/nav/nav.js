import './nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
        <div class="logo">
            <h3 class="title">inverted designs</h3><h3 class="title-inv">inverted designs</h3>
        </div>
        <div class="links">
            <Link class="link" to="/">home</Link>
            <Link class="link" to="/shop">shop</Link>
            <Link class="link" to="/portfolio">portfolio</Link>
            <Link class="link" to="/contact">contact</Link>
            <Link class="link" to="/faq">faq</Link>
        </div>
    </div>
  );
}

export default Nav;


  
