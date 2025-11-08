import './HomeItem.css';

function HomeItem({ title, description }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

export default HomeItem;
