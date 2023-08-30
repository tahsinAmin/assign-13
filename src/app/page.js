"use client";

export default function Home() {
  const setCookie = async () => {
    let data = await fetch("http://localhost:3000/api/cookies");

    if( data.status == 201) {
      alert("Cookie has been set")
    }
  };
  return (
    <div>
      <div className="mt-40 flex justify-center gap-10">
        <button
          className="text-gray-100 bg-blue-400 p-2"
          onClick={setCookie}
        >
          Set Cookie
        </button>
        <button
          className="text-gray-100 bg-blue-400 p-2"
          // onClick={handleSubmit}
        >
          Get Cookie
        </button>
        <button
          className="text-gray-100 bg-blue-400 p-2"
          // onClick={handleSubmit}
        >
          Redirect
        </button>
      </div>

      <div className="show-msg">

      </div>
    </div>
  );
}
