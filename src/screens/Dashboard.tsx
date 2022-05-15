import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getCatFromStore } from "../redux/slice/catsSlice";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image";

type Props = {};

const Dashboard = (props: Props) => {
  const catData = useAppSelector(getCatFromStore);
  const navigate = useNavigate();

  return (
    <div>
      <h1>/Dashboard</h1>
      {catData && <Image url={catData.url} />}
      <div className="mt-6 text-center">
        <Button
          label="Go to Home"
          className="p-button-primary p-button-raised p-button-rounded"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
