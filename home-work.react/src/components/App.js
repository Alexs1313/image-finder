import Searchbar from "./SearchImages/Searchbar/Searchbar";
import SearchInfo from "./SearchImages/Gallery/Gallery";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const formSubmitHandler = (searchValue) => {
    setName(searchValue);
  };

  return (
    <div>
      <Searchbar onSubmit={formSubmitHandler} />
      <SearchInfo queryText={name} />
    </div>
  );
};

export default App;
