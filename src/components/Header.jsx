import Logo from "./logo";

export default function Head() {
  return (
    <header className="container">
      <section className="head">
        <Logo />
        <ul className="menu">
          <li className="li-menu">
            <a>CHARACTERS</a>
          </li>
          <li className="li-menu selected-menu">
            <a>COMICS</a>
          </li>
          <li className="li-menu">
            <a>MOVIES</a>
          </li>
          <li className="li-menu">
            <a>TV</a>
          </li>
          <li className="li-menu">
            <a>GAMES</a>
          </li>
          <li className="li-menu">
            <a>COLLECTIBLES</a>
          </li>
          <li className="li-menu">
            <a>VIDEOS</a>
          </li>
          <li className="li-menu">
            <a>FANS</a>
          </li>
          <li className="li-menu">
            <a>NEWS</a>
          </li>
          <li className="li-menu">
            <a>SHOP</a>
          </li>
        </ul>
      </section>
    </header>
  );
}
