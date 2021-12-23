import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import CatsList from "./components/CatsList";
import Navigation from "./components/Navigation";

import "./styles/styles.css";

const names = {
  1: "Sleepy",
  2: "Happy",
  3: "Grumpy",
  4: "Dopey",
  5: "Sneezey",
  6: "Bashful",
  7: "Doc"
};

const App = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // call the cat API here
    console.log("useEffecting");
    axios
      .get(`https://api.thecatapi.com/v1/images/search?limit=7`)
      .then((response) => {
        //  add our custom fields to api results
        // use map which returns a new list of data from existing data
        const newCats = response.data.map((cat, i) => ({
          ...cat,
          id: i + 1,
          name: names[i + 1]
        }));
        setCandidates(newCats);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(candidates);

  return (
    <main className="App">
      <Router>
        <nav>
          <Navigation />
          <h1>CATS HOME PAGE</h1>
        </nav>
      <Routes>
        <Route path="/">
          <Route path="cats" element={<CatsList candidates={candidates} />} />
        </Route>
      </Routes>
      </Router>
    </main>
  );
};

export default App;
