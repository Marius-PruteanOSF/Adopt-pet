import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from './useBreedList';
//import Pet from "./pet";
import Results from "./Results";

const ANIMALS = [
    "dog",
    "cat",
    "bird",
    "fish",
    "hamster",
    "rabbit",
    "turtle",
    "snake",
    "lizard",
    "bear",
    "pig",
    "cow",
    "chicken",
    "goat",
    "sheep",
    "penguin",
    "tiger",
    "elephant",
    "zebra",
    "rhino",
    "giraffe",
    "panda"
]

const BREEDS = [
    "Affenpinscher",
    "Afghan Hound",
    "Airedale Terrier",
    "Akita",
    "Alaskan Malamute",
    "American Bulldog",
    "American Cocker Spaniel",
    "American Eskimo Dog",
    "American Foxhound",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Water Spaniel",
    "Anatolian Shepherd Dog",
    "Appenzeller Sennenhunde",
    "Australian Cattle Dog"
]

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [pets,setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    //undestructural way
    //    const locationTuple = useState('Seattle, WA');
//    const location = locationTuple[0];
//    const setLocation = locationTuple[1];

    // can be used onChange event as setLocation
    // function updateLocation(e) {
    //     setLocation(e.target.value);
    // }

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log(json.pets);
      
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label>
                Location
                <input id="location" 
                    onChange={(e) => setLocation(e.target.value)} 
                    //onChange={updateLocation}
                    value={location} 
                    type="text" 
                    placeholder="Location" 
                />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => 
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>)
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option />
                            {
                                breeds.map(breed => 
                                    <option key={breed} value={breed}>
                                        {breed}
                                    </option>
                                )
                            }
                    </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        onBlur={(e) => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            {/* {
                pets.map((pet) => (
                    <Pet 
                        key={pet.name} 
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                    />
                ))
            } */}
           <Results pets={pets} />
        </div>
    );
};

export default SearchParams;