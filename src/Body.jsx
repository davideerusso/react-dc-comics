import Alert from "../src/Alert";

export default function Main() {
  return (
    <main>
      <section className="back-color">
        <Alert text="Good Comics" type="success" />
        <div className="container main-content">
          <h1>-- Content goes here--</h1>
        </div>
      </section>
    </main>
  );
}
