import React, { useEffect, useState } from "react";
import axios from "axios";

const app = () => {
  const [userData, setuserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setuserData(response.data);
  };
  useEffect(function(){
    getData()

  },[])
  let printUserData = <h3 className="text-gray-400">No User Available</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-wite rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white ">
      <div className=" ml-20 mt-5 flex flex-wrap  gap-4">{printUserData}</div>
      <div className="flex justify-center items-center p-5">
        <button className="bg-amber-400 text-black px-4 py-4 "  >Prev</button>
        <button>Next</button>
      </div>
    </div>
  
  );
};

export default app;
