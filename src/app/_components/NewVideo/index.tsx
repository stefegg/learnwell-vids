"use client";
import { useState } from "react";
import NewVideoForm from "./form";
import SuccessFail from "./successfail";

export default function NewVideo() {
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  return (
    <div
      className={`w-1/2 bg-greenLight h-3/4 rounded-lg p-8 border-cheese border-4 flex flex-col items-center gap-6 text-white`}
    >
      {submitStatus !== null ? (
        <SuccessFail
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
      ) : (
        <NewVideoForm setSubmitted={setSubmitStatus} />
      )}
    </div>
  );
}
