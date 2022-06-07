import React, { memo } from "react";

const Navbar = memo((props) => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Habit Tracker</span>
      <span className="navbar-count">{props.count}</span>
    </nav>
  );
});

export default Navbar;
