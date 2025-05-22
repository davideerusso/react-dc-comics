export default function Market() {
  return (
    <main className="back-color-market">
      <section className="container market-content">
        <ul className="menu-market">
          <li className="li-market">
            <img
              className="icon-market"
              src="./src/assets/img/buy-comics-digital-comics.png"
              alt=""
            />

            <a>DIGITAL COMICS</a>
          </li>
          <li className="li-market">
            <img
              className="icon-market"
              src="./src/assets/img/buy-comics-merchandise.png"
              alt=""
            />
            <a>DC MERCHANDISE</a>
          </li>
          <li className="li-market">
            <img
              className="icon-market"
              src="./src/assets/img/buy-comics-subscriptions.png"
              alt=""
            />
            <a>SUBSCRIPTION</a>
          </li>
          <li className="li-market">
            <img
              className="icon-market"
              src="./src/assets/img/buy-comics-shop-locator.png"
              alt=""
            />
            <a>COMIC SHOP LOCATOR</a>
          </li>
          <li className="li-market">
            <img
              className="icon-market-visa"
              src="./src/assets/img/buy-dc-power-visa.svg"
              alt=""
            />
            <a>DC POWER VISA</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
