import { useState } from "react";
import Button from "./Button";
import OrderModal from "./OrderModal";
import {
  MenuSection,
  MenuFilters,
  MenuItemContainer,
  MenuItem,
} from "../styles/MenuStyles";

const Menu = ({ items, itemsToShow }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredItems = items.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  const itemsToDisplay = filteredItems.slice(0, itemsToShow);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <MenuSection>
      <h2>
        <span>Menu</span>
      </h2>
      {itemsToShow === items.length && (
        <MenuFilters>
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "breakfast" ? "active" : ""}`}
            onClick={() => handleFilterChange("breakfast")}
          >
            Breakfast
          </button>
          <button
            className={`filter-btn ${filter === "lunch" ? "active" : ""}`}
            onClick={() => handleFilterChange("lunch")}
          >
            Lunch
          </button>
          <button
            className={`filter-btn ${filter === "dessert" ? "active" : ""}`}
            onClick={() => handleFilterChange("dessert")}
          >
            Dessert
          </button>
        </MenuFilters>
      )}
      <MenuItemContainer>
        {itemsToDisplay.map((item) => (
          <MenuItem key={item.id} data-aos="zoom-in">
            <div className="card">
              <img src={item.image} alt={item.title} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <Button
                  text="Online Order"
                  className="cta"
                  type="button"
                  onClick={() => handleOrderClick(item)}
                />
              </div>
            </div>
          </MenuItem>
        ))}
      </MenuItemContainer>
      {selectedItem && (
        <OrderModal item={selectedItem} onClose={handleModalClose} />
      )}
    </MenuSection>
  );
};

export default Menu;
