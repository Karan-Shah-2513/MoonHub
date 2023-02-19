import React from "react";
import Navbar from "../components/Navbar";
import ReposList from "../components/ReposList";

export default function Hub() {
  return (
    <div className="p-6">
      <ReposList />
    </div>
  );
}
