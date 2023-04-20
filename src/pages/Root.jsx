import React from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";

export default function Root() {
  return (
    <div>
      <Headers />
      <div>
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}
