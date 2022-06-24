import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/Player";
import { useParams } from "react-router-dom";

interface Params {
  slug: string;
}

function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <VideoPlayer lessonSlug={slug} />
        ) : (
          <div className="flex-1"></div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}

export default Event;
