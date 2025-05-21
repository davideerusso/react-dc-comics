export default function Alert({ text, type }) {
  return (
    <section className="container alert-space">
      <div className={`alert alert-${type || "danger"} `}>
        {`${text || "Si è verificato un errore"} `}
      </div>
    </section>
  );
}
