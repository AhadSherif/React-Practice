import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Component/header";
import Card from "../Component/card";
import "./Styles/home.css"

function Home() {
  return (
    <div>
      Home
      <p>
        <NavLink to ="/about">Go to about page</NavLink>
      </p>
      <Header></Header>
      <div className="cardcontainer">
      <Card Title1="pubg" Title2="it is a good game"> </Card>
      <Card Title1="cricket" Title2="it is a good game"></Card>
      <Card Title1="cod" Title2="it is a good game"></Card>
      <Card Title1="coc" Title2="it is a good game"></Card>
      <Card Title1="free fire" Title2="it is a good game"></Card>
      <Card Title1="football" Title2="it is a good game"></Card>
      </div>
    

    </div>
  );
}
export default Home;
