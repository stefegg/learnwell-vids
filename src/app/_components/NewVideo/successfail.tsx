import { Button } from "../index";
import { SetStateAction, Dispatch } from "react";
import { useRouter } from "next/navigation";

type SuccessFailProps = {
  submitStatus: string | null;
  setSubmitStatus: Dispatch<SetStateAction<string | null>>;
};

export default function SuccessFail(props: SuccessFailProps) {
  const router = useRouter();
  const { submitStatus, setSubmitStatus } = props;
  return (
    <div className="w-full flex gap-4 flex-col items-center h-full justify-evenly">
      <h2 className="text-4xl font-extralight">
        {submitStatus === "success"
          ? "Video Successfully Added!"
          : "Failed to Add Video"}
      </h2>
      <div className="flex flex-row justify-center w-full">
        {submitStatus === "success"
          ? "Click 'Go Back' to add another video, or click 'Watch Videos' to get back to learning!"
          : "Click 'Go Back' to try again, or click 'Watch Videos' to get back to learning!"}
      </div>
      <div className="w-full gap-4 flex flex-row justify-center">
        <Button
          buttonText="Go Back"
          size="med"
          onClick={() => setSubmitStatus(null)}
        />
        <Button
          buttonText="Watch Videos"
          size="med"
          onClick={() => router.push("/watch")}
        />
      </div>
    </div>
  );
}
