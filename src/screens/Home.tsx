import React from "react";
import { useEffect } from "react";
import { Button } from "primereact/button";

import { useAppSelector } from "../redux/hooks";
import { getCatFromStore, setCat } from "../redux/slice/catsSlice";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const catData = useAppSelector(getCatFromStore);

  return (
    <div>
      <h1>/Home</h1>
      {/* Display the cat */}
      {catData && <Image url={catData.url} />}
      {/* Got to dashboard button */}
      <div className="mt-6 text-center">
        <Button
          label="Go to Dashboard"
          className="p-button-success p-button-raised p-button-rounded"
          onClick={() => {
            navigate("/dashboard", { replace: true });
          }}
        />
      </div>
    </div>
  );
};

export default Home;
