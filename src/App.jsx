// App.jsx
import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("technology");

  return (
    <>
      <Navbar setcategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
