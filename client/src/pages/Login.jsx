import React from "react";

import { useAuth } from "@arcana/auth-react";

export default function Login() {
  const auth = useAuth();
  React.useEffect(() => {
    console.log("Login page loaded");
    console.log(auth.user);
  }, [auth.user]);
  const loginWithGitHub = async () => {
    await auth
      .loginWithSocial("github")
      .then((result) => {
        console.log(auth.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="text-3xl text-blue-600 text-center">
        Footprints on the Moon !
      </div>
      <div className="links flex flex-col w-40 text-center">
        <button
          onClick={() => {
            loginWithGitHub();
          }}
          className="bg-blue-500 hover:bg-blue-200"
        >
          Login with Git-Hub
        </button>
      </div>
      {auth.user && (
        <>
          <div>
            Hello <span class="animate-waving-hand"> 👋🏻 </span> {auth.user.name}{" "}
          </div>
          <div className="links flex flex-col w-40 text-center">
            <button
              onClick={() => {
                auth.logout();
              }}
              className="bg-blue-500 hover:bg-blue-200"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </>
  );
}
