import banner from '../../assets/banner.jpg'
const Books = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4">Books to freshen up your bookshelf </h1>
            <button className="btn btn-primary">View the list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
