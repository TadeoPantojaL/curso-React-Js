import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
    const formatUserName = (userName) => `@${userName}`
  return (
    <section className="App">
      <TwitterFollowCard
      formatUserName={formatUserName}
        userName={"midudev"}
        name={"miguel angel dev"}
        
      />
      <TwitterFollowCard
      formatUserName={formatUserName}
        userName={"pheralb"}
        name={"Pablo Hernández"}
        
      />
      <TwitterFollowCard
      formatUserName={formatUserName}
        userName={"saitama"}
        name={"Saitama"}
       
      />

      <TwitterFollowCard
      formatUserName={formatUserName}
        userName={"vxnder"}
        name={"Vanderhart"}
         
      />
    </section>
  );
}
