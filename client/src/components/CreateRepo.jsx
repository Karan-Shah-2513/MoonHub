import React, { useRef, useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";

export default function createRepo() {
  const inputRef = useRef(null);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const deploy = async (e) => {
    // Push file to lighthouse node
    // Both file and folder supported by upload function
    const output = await lighthouse.upload(
      e,
      import.meta.env.VITE_LIGHTHOUSE_KEY,
      progressCallback
    );
    console.log("File Status:", output);
    /*
          output:
            {
              Name: "filename.txt",
              Size: 88000,
              Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
            }
          Note: Hash in response is CID.
        */

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );
  };

  return (
    <div>
      <h2>Select a folder to send to the server</h2>
      <input directory="" webkitdirectory="" type="file" onChange={e=>deploy(e)}/>
    </div>
  );
}
