import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ links }) {
  return (
    <>
      <nav>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path}>
                {link.label}
            </NavLink>
            </li>
          ))}
        </ul>

        
      </nav>
    </>
  );
}

export default Navigation;
