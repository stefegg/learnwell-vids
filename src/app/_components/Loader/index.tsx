"use client";
import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <ColorRing
        colors={["#ffbf46", "#ff844d", "#50c7e5", "#49c19d", "#3b9393"]}
      />
    </div>
  );
}
