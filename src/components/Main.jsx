import Alert from "./Alert";
import ComicsList from "./ComicsList";

export default function Main({ comics }) {
  return (
    <main>
      <div className="image-back "></div>
      <section className="back-color">
        <ComicsList comics={comics} />
        {/* <Alert text="Good Comics" type="success" /> */}
        <div className="container main-content">
          <h1>-- Content goes here--</h1>
        </div>
      </section>
    </main>
  );
}
