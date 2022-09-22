import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorite">My Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
