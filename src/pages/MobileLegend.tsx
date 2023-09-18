import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function MobileLegend() {
  interface Heroes {
    hero_name: string;
    hero_role: string;
    hero_avatar: string;
    hero_specially: string;
  }

  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [heroes, setHeroes] = React.useState<Heroes[]>([]);
  const [filteredHeroes, setFilteredHeroes] = React.useState<Heroes[]>([]);

  React.useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      const response = await fetch(
        "https://api.dazelpro.com/mobile-legends/hero"
      );
      const data = await response.json();
      const heroesArray: Heroes[] = Object.values(data.hero);
      setHeroes(heroesArray);
      setFilteredHeroes(heroesArray);
    } catch (error) {
      console.error("Failed to get hero data:", error);
    }
  };

  const searchHeroes = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = heroes.filter((hero) => {
      return (
        hero.hero_name.toLowerCase().includes(searchTermLower) ||
        hero.hero_role.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredHeroes(filtered);
  };

  const resetFilter = () => {
    setSearchTerm("");
    setFilteredHeroes(heroes);
  };

  return (
    <React.Fragment>
      <header className="bg-gray-700 z-[9999] top-0 fixed w-full h-auto py-2 px-20">
        <Link to="/">
          <h1 className="font-medium">
            <FontAwesomeIcon icon={faChevronLeft} /> Go Back
          </h1>
        </Link>
      </header>
      <div className="w-full h-min min-h-screen bg-slate-900 p-20">
        <div className="flex flex-col">
          <h1 className="text-center text-white text-6xl font-bold mb-10">
            Hero List
          </h1>
          <div className="join w-1/2 mx-auto mb-20">
            <input
              type="text"
              className="input join-item w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search heroes by name or role"
            />
            <button
              className="btn btn-neutral join-item"
              onClick={searchHeroes}
            >
              Search
            </button>
            <button className="btn btn-neutral join-item" onClick={resetFilter}>
              Reset
            </button>
          </div>
          <div id="heroes">
            {filteredHeroes.length === 0 ? (
              <p className="text-center text-slate-600 text-3xl font-medium mt-60">
                No heroes has been found.
              </p>
            ) : (
              filteredHeroes.map((hero, index) => (
                <div
                  className="card card-side bg-slate-800 p-1 mb-5"
                  key={index}
                >
                  <figure>
                    <img src={hero.hero_avatar} alt="hero" />
                  </figure>
                  <div className="card-body">
                    <h1 className="card-title">{hero.hero_name}</h1>
                    <p className="m-0">Role: {hero.hero_role}</p>
                    <p className="m-0">Ability: {hero.hero_specially}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <footer className="w-full p-1 m-1 flex justify-center items-center z-[9999] bottom-0 fixed text-slate-950">
        <Link to="https://github.com/adhxabre">
          <h1 className="w-auto h-auto px-3 py-1 rounded-2xl bg-white border-2 border-white ease-out duration-200 hover:scale-110 hover:text-white hover:bg-transparent">
            Made by <strong className="text-slate-400">Abel Dustin</strong> with
            💖
          </h1>
        </Link>
      </footer>
    </React.Fragment>
  );
}
