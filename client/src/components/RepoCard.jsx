import React from "react";
/**
 *   const [repos, setRepos] = React.useState([
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
 */
export default function RepoCard(props) {
  console.log(props.repo.image);
  return (
    <>
      <div className="card p-3 lg:card-side bg-base-100 shadow-xl h-48">
        <figure>
          <img src={`${props.repo.image}`} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.repo.name}</h2>
          <p>{props.repo.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
