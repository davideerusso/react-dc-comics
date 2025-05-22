import ComicsCard from "./ComicsCard";

export default function ComicsList({ comics }) {
  return (
    <section className="container comics-flex">
      {comics.map((comic) => (
        <ComicsCard key={comic.id} name={comic.title} image={comic.thumb} />
      ))}
    </section>
  );
}
