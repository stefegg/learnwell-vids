import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
