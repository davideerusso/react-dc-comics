export default function Alert({ text, type }) {
  if (!type) {
    return (
      <section className="container alert-space">
        <div className="alert alert-danger">Si è verificato un errore</div>
      </section>
    );
  }
  return (
    <section className="container alert-space">
      <div className={`alert alert-${type}`}>{text}</div>
    </section>
  );
}
