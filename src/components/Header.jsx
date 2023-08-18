import Action from "./Action";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">one-liner</Link>
        </h1>
        <Action />
      </header>
    </>
  );
};

export default Header;
