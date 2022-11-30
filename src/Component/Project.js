import React, { useState, useEffect } from "react";
import axios from "axios";


const Maze = () => {
  
  const [lists1, setLists1] = useState([]);

  const [display, setDisplay] = useState([]);

  const [lists, setLists] = useState([]);
  const [shows, setShows] = useState("");
  const [displays, setDisplays] = useState([]);
  const [tick, setTick] = useState(true);
  // i was take const and different name 

  useEffect(() => {
    axios
      .get("  https://api.tvmaze.com/search/shows?q=girls")
      .then((response) => {
        console.log(response.data);
        setLists(response.data);
      });
  }, []);
        // i was use axios fetch there all showing picture 
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/people?q=akon")
      .then((response) => {
        console.log(response.data);
        setLists1(response.data);
      });
  }, []);
       // there same i was use axios fetch 
  const submitbutton = () => {
    setDisplays(
      lists.filter((list) => list.show.name.toUpperCase().includes(shows))
    );
    // this function showing all image in shows
    setDisplays(
      lists1.filter((list1) => list1.person.name.toUpperCase().includes(shows))
       // this function showing all image in Actors
    );
  };

  return (
    <>
      <div className="main-box">
        <div className="boxtv">
          <h1>TVmaze</h1>
          <h2>Search shows</h2> 
          <div className="ans">
          <input
              className="ans"
              type="checkbox"
              checked={tick}
              onChange={() => setTick(!tick)}
            />
            <label>Actors</label>
            <input
              className="ans"
              type="checkbox"
              checked={!tick}
              onChange={() => setTick(!tick)}
            />
            <label>Shows</label>
          </div>
          <br></br>
          <button onClick={submitbutton}>SUBMIT</button>
        </div>
        <div className="box1">
          {tick ? (
            <div className="actor">
              {displays.map((display1) =>
                display1.person.image !== null ? (
                  <li>
                    <img src={display1.person.image.medium} alt ="NA" />
                    <h4>{display1.person.name}</h4>
                    <h7>birthday: {display1.person.birthday}</h7>
                  </li>
                  

                ) : (
                  <></>
                )
              )}
            </div>
          ) : (
            <div className="show">
             {displays.map((display) =>
                display.show.image !== null ? (
                  <li>
                    <img src={display.show.image.medium} alt ="NA" />
                    <h4>{display.show.name}</h4>
                    <h7>Geners : {display.show.genres}</h7>
                  </li>
                ) : (
                  <></>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

 
export default Maze;