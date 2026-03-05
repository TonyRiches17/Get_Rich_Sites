// import "./Gallery.css";
// import Cards from "../Cards/Cards";

// function Gallery() {
//   return (
//     <div className="gallery">
//       <h1 className="gallery__title">Gallery</h1>
//       <form className="gallery__form">
//         <label htmlFor="sort" className="gallery__form-label">
//           Sort
//           <select name="" id="" className="gallery__form-select">
//             <option></option>
//             <option>Title</option>
//             <option>Type</option>
//             <option>Location</option>
//             <option>Description</option>
//             <option>URL</option>
//           </select>
//         </label>
//         <label htmlFor="search" className="gallery__form-label">
//           Search
//           <input
//             id="search"
//             placeholder="Search"
//             type="text"
//             className="gallery__form-input"
//           />
//         </label>
//         <button type="button" className="gallery__form-button">Go
//           <div className="gallery__form-button-square"></div>
//         </button>
//       </form>
//       <Cards />
//     </div>
//   );
// }

// export default Gallery;

import { useState } from "react";
import "./Gallery.css";
import Cards from "../Cards/Cards";

function Gallery() {
  const [sortField, setSortField] = useState("");   // which field to sort/filter on
  const [searchQuery, setSearchQuery] = useState(""); // search input

  const handleSortChange = (e) => {
    setSortField(e.target.value.toLowerCase()); // normalize field name
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearForms = () => {
    setSortField("");
    setSearchQuery("");
  };

  return (
    <div className="gallery">
      <h1 className="gallery__title">Gallery</h1>
      <form
        className="gallery__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="sort" className="gallery__form-label">
          Sort
          <select
            id="sort"
            className="gallery__form-select"
            value={sortField}
            onChange={handleSortChange}
          >
            <option value="">-- All --</option>
            <option value="title">Title</option>
            <option value="type">Type</option>
            <option value="location">Location</option>
            <option value="description">Description</option>
            <option value="url">URL</option>
          </select>
        </label>
        <label htmlFor="search" className="gallery__form-label">
          Search
          <input
            id="search"
            placeholder="Search"
            type="text"
            className="gallery__form-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>
        <button
          type="button"
          className="gallery__form-button"
          onClick={() => clearForms()}
        >
          Clear
          <div className="gallery__form-button-square"></div>
        </button>
      </form>
      <Cards sortField={sortField} searchQuery={searchQuery} />
    </div>
  );
}

export default Gallery;
