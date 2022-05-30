import React from "react";
import Atas from "../../components/atas";
import Bawah from "../../components/bawah";
import { useState } from "react";
import { Cmp } from "../../components/cmp";

const Test = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="mt-20">
      <Atas
        children={
          <button className="container mx-auto" onClick={() => setClick(!click)}>
            <a href={click ? "#bw" : "/test/test2"}>Click</a>
          </button>
        }
      />
      <div className="container mx-auto h-screen bg-green-700 p-20"></div>
      <Bawah children={click && <Cmp />} />
    </div>
  );
};

export default Test;
