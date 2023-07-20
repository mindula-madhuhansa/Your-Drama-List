export default function DramaImg({ drama, index = 0, className = "null" }) {
  if (!drama.photos?.length) {
    return "";
  }

  if (!className) {
    className = "object-cover";
  }
  return (
    <img
      className={className}
      src={"http://localhost:4000/uploads/" + drama.photos[index]}
      alt=""
    />
  );
}
