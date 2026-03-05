import "./Cards.css";
import { cardInfo } from "../../utils/constants";

function Cards({ sortField, searchQuery }) {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  // Filter
  let filteredCards = cardInfo.filter((item) => {
    if (!sortField || !searchQuery) return true;
    const fieldValue = item[sortField]?.toLowerCase() || "";
    return fieldValue.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="cards">
      {filteredCards.map((item) => (
        <div
          key={item.id}
          onClick={() => handleCardClick(item.url)}
          className="card__container"
        >
          <img
            src={item.image}
            alt={`${item.title} website screenshot`}
            className="card__image"
          />
          <div className="card__info">
            <p className="card__title">{item.title}</p>
            <p className="card__type">{item.type}</p>
            <p className="card__location">{item.location}</p>
            <p className="card__description">{item.description}</p>
            <p className="card__url">{item.url}</p>
          </div>
          <div className="card__technologies">
            <div className="card__technology">
              {item.technologies.map((tech, index) => (
                <p className="card__tech" key={index}>{tech}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
