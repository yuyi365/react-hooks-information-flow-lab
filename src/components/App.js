import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
