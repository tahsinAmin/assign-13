"use client";

import { useState } from "react";

export default function Home() {
  const setCookie = async () => {
    let data = await fetch("http://localhost:3000/api/cookies");

    if (data.status == 201) {
      alert("Cookie has been set");
    }
  };


  // const getCookie = async () => {
  //   let data = await fetch("http://localhost:3000/api/get-cookie");
   
  //   if (data.status == 200) {
  //     alert("It is here");
  //   }
  //   console.log("data = ", data.msg);
  // };


  const [cookieValue, setCookieValue] = useState('');

  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieVal] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieVal);
      }
    }
    return '';
  };

  const handleGetCookie = () => {
    const cookieName = 'theme'; // Replace with your actual cookie name
    const value = getCookie(cookieName);
    setCookieValue(value);
  };

  const welcome = async () => {
    let data = await fetch("http://localhost:3000/api/welcome");
    let res = await data.json()
    alert(res.message + ". Version:" + res.version);

    
    // if (data.status == 201) {
    //   alert(data.json());
    // }
  };


  return (
    <div>
      <div className="mt-40 flex justify-center gap-10">
        <button className="text-gray-100 bg-blue-400 p-2" onClick={setCookie}>
          Set Cookie
        </button>
        <button
          className="text-gray-100 bg-blue-400 p-2"
          onClick={handleGetCookie}
        >
          Get Cookie
        </button>
        <button
          className="text-gray-100 bg-blue-400 p-2"
          onClick={welcome}
        >
          welcome
        </button>
        <button
          className="text-gray-100 bg-blue-400 p-2"
          // onClick={handleSubmit}
        >
          Redirect
        </button>
      </div>

      <div className="show-msg text-center">
        {cookieValue && <p>Theme: {cookieValue}</p>}</div>
    </div>
  );
}
