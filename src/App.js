import React from "react";
import Header from "./components/header";
import TinderCards from "./components/tinder-cards";
import Chats from "./components/chats";
import ChatScreen from "./components/chat-screen";
import SwipeButtons from "./components/swipe-buttons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*HEADER  */}
      <Router>
        <Switch>
          <Route path="/chat/:user">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* CARDS  */}
      {/* BUTTONS */}

      {/* CHAT SCREEN */}
      {/* INDIVIDUAL CHAT SCREEN */}
    </div>
  );
}

export default App;
