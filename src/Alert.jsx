export default function Alert({ text, type }) {
  return (
    <section className="container">
      <div className={`alert alert-${type} `}>{text}</div>
    </section>
  );
}
