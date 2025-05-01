"use client";
export default function Home() {
  return (
    <div className="flex justify-center gap-3 items-center w-full h-full">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => {
          fetch("/api/auth/login", {}).then((res) => {
            if (res.status === 200) {
              window.location.href = "/";
            } else {
              console.error("Login failed");
            }
          });
        }}
      >
        login
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => {
          fetch("/api/auth/logout", {
            method: "POST",
          }).then((res) => {
            if (res.status === 200) {
              window.location.href = "/";
            } else {
              console.error("Logout failed");
            }
          });
        }}
      >
        logout
      </button>
    </div>
  );
}
