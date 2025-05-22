export default function ComicsCard({ name, image }) {
  return (
    <div className="card-6">
      <img className="comics-image cropper-card" src={image} alt="" />
    </div>
  );
}
