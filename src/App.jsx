import PropTypes from "prop-types";
import Cardlist from "./components/card-list/card-list.component";
import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {

  const [searchField, setSearchField] = useState("");
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilterBots] = useState(bots);

 console.log('render')

  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setBots(users));
  }, []);

  useEffect(() => { 
    const newFilteredBots = bots.filter((bot) => {
      return bot.username.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilterBots(newFilteredBots);
  }, [bots, searchField]); 

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); 
  };

  return (
    <>
      <div className="App">
        <h1 className="text-white text-5xl mt-10 mb-5 font-Mechanical">
          MedaBotsDex
        </h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          id="search-box"
          className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-40 h-10 mb-8 rounded-lg"
          placeholder="tape here"
        />

        <div className="container mx-auto ">
          <Cardlist filteredBots={filteredBots} />
        </div>
      </div>
    </>
  );
};

export default App;

App.propTypes = {
  className: PropTypes.string,
};
