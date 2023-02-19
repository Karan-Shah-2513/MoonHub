import React, { useRef, useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";

export default function CreateRepo() {
  const [formData, updateFormData] = useState({});
  const [fileEvent, setFileEvent] = useState(null);
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

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    deploy(fileEvent);
  };

  return (
    <div>
      <>
        <form class="w-full max-w-screen" onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Repository Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                name="name"
                type="text"
                placeholder="MoonHub"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                ImageLink
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="imglink"
                placeholder="https://www.google.com/"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div> */}
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Description
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="lorem epsum"
                name="description"
                onChange={handleChange}
              />
            </div>

            <div class="w-full md:w-1/2 px-3 mb-8 mt-4 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-subscriptionRate"
              >
                Subscription Rate
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-subscriptionRate"
                name="subscriptionRate"
                type="text"
                placeholder="2Cr/m"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>

            <div class="w-full md:w-1/2 px-3 mt-4 mb-8 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-oneTimeFee"
              >
                One Time Fee
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-oneTimeFee"
                name="oneTimeFee"
                type="text"
                placeholder="2Cr"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
          </div>
          <h2>Select a folder to send to the server</h2>
          <input
            directory=""
            webkitdirectory=""
            type="file"
            className="bg-gray-200 file-input file-input-info w-full max-w-screen"
            onChange={(e) => {
              setFileEvent(e);
            }}
          />
          <div className="flex justify-center pt-5">
            <button
              className="block bg-blue-600 hover:bg-blue-800 btn"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    </div>
  );
}
