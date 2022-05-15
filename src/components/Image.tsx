import React from "react";
import { CatsState } from "../redux/slice/catsSlice";

type Props = {
  url: string;
};

const Image = ({ url }: Props) => {
  return (
    <img
      src={`https://cataas.com/${url}`}
      loading={"eager"}
      width={300}
      height={300}
      style={{
        maxHeight: 300,
      }}
      alt=""
      className="rounded-lg"
    />
  );
};

export default Image;
