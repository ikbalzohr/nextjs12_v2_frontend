import React, { useEffect, useState } from "react";

const test = () => {
  const [type, setType] = useState("");
  const [img, setImg] = useState(false);
  const [img1, setImg1] = useState(false);

  useEffect(() => {
    if (type == "manis") {
      setImg(true);
    } else if (type == "doge") {
      setImg1(true);
    } else {
      setImg(false);
      setImg1(false);
    }
  }, [type]);

  return (
    <div>
      <div className="flex justify-center bg-slate-500 m-56">
        <div className="m-10 bg-stone-600 p-5 w-1/2">
          <div className="flex justify-center">
            {img ? <img src="https://media.istockphoto.com/photos/cute-young-cat-playing-in-a-garden-picture-id1324776163?k=20&m=1324776163&s=612x612&w=0&h=ZclWZm3EqHJyxDYcWv8ss51v0T3wBLKKSWtnxqIsoCg=" alt="cats" /> : ""}
            {img1 ? <img src="https://images.unsplash.com/photo-1622190994281-8b48849440e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="doge" /> : ""}
          </div>
          <h1 className="text-yellow-50 text-center font-mono font-bold text-5xl">{type}</h1>
          <div className="m-5"></div>
          <input type="text" onChange={(e) => setType(e.target.value)} placeholder="Tulis Disni" className="border-4 border-slate-700 w-full text-center" />
        </div>
      </div>
    </div>
  );
};

export default test;
