"use client";
import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <ColorRing
      colors={["#ffbf46", "#ff844d", "#50c7e5", "#49c19d", "#3b9393"]}
    />
  );
}
