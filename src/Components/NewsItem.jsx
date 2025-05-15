const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card my-2" style={{ width: "22rem" }}>
      <img src={src} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text">{description || "No description provided."}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
