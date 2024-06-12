import One from "./one";
import Two from "./two";
import Three from "./three";
export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <One />
      <Two />
      <Three />
    </div>
  );
}
