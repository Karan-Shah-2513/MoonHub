import React, { useState, useEffect } from "react";
import RepoCard from "./RepoCard";
import { toast } from "react-toastify";
import { useAuth } from "@arcana/auth-react";

export default function ReposList() {
  const [repos, setRepos] = React.useState([]);
  const auth = useAuth();

  useEffect(() => {
    const { address } = auth.user;
    fetch(`${import.meta.env.VITE_BACKEND_SERVER}/repository/my/${address}`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="">
        {repos.map((repo) => {
          return <RepoCard repo={repo} />;
        })}
      </div>
    </>
  );
}
