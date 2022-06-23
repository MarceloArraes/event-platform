import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/Player";

function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <VideoPlayer />
        <Sidebar />
      </main>
    </div>
  );
}

export default Event;
