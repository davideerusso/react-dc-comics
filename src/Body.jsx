import Alert from "../src/Alert";

export default function Main() {
  return (
    <main>
      <Alert text="Errore Comics" type="danger" />

      <section className="back-color">
        <div className="container main-content">
          <h1>-- Content goes here--</h1>
        </div>
      </section>
    </main>
  );
}
