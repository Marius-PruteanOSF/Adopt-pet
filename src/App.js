/* global React ReactDOM  */
import {React, useState, StrictMode} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";


// old way
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       id: "pet-1",
//       name: "Tobby",
//       animal: "dog",
//       breed: "bishon",
//     }),
//     React.createElement(Pet, {
//       id: "pet-2",
//       name: "Tweety",
//       animal: "bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       id: "pet-3",
//       name: "Sudo",
//       animal: "dog",
//       breed: "Terrier",
//     }),
//   ]);
// };

const App = () => {
    const theme = useState("darkblue");
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <Router>
                <header>
                    <Link to="/">
                        <h1 id="my-brand">Adopt Me!</h1>
                    </Link>
                </header>
                <Switch>
                    <Route path="/details/:id">
                      <Details />
                    </Route>
                    <Route path="/">
                    {/* <Pet
                        id="pet-1"
                        name="Tobby"
                        animal="dog{
        
                    {/* <Pet
                        id="pet-1"
                        name="Tobby"
                        animal="dog"
                        breed="Bishon"
                    />
                    <Pet
                        id="pet-2"
                        name="Tweety"
                        animal="bird"
                        breed="Cockatiel"
                    />
                    <Pet
                        id="pet-3"
                        name="Sudo"
                        animal="dog"
                        breed="Terrier"
                    /> */}
                        <SearchParams />
                    </Route>
                    </Switch>
                </Router>
            
            </div>
            </ThemeContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
