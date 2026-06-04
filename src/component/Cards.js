const Cards = ({ imageSource, title, text, link, tags = [] }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <article className="project-card">
        <div className="project-thumb">
          <img src={imageSource} alt={title} loading="lazy" />
        </div>
        <div className="project-body">
          <h5>{title}</h5>
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p>{text}</p>
          <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      </article>
    </div>
  );
};
export default Cards;
