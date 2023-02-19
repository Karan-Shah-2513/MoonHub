import React from "react";
import RepoCard from "./RepoCard";

export default function ReposList() {
  const [repos, setRepos] = React.useState([
    {
      id: "123",
      name: "MoonHub",
      description: "Footprints on the moon",
      owner: "Karan",
      image: "https://via.placeholder.com/300",
      oneTimeFee: "2cr",
      subscriptionRate: "1Cr/s",
      folder: "FolderName",
      isActive: true,
      crearedAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
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
