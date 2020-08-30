import React, { useState, useEffect } from "react";
import database from "../firebase";
import TinderCard from "react-tinder-card";
import "../assets/css/tinder-cards.css";

function TinderCards() {
  const [users, setUsers] = useState([]);

  //piece of code that runs based on condition
  useEffect(() => {
    //this will run ONCE when component loads

    const unsubscribe = database
      .collection("users")
      .onSnapshot((snapshot) =>
        setUsers(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <h1>
        <div className="cardsContainer">
          {users.map((user) => (
            <TinderCard
              className="swipe"
              key={user.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${user.url})` }}
                className="card"
              >
                <h3>{user.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default TinderCards;
