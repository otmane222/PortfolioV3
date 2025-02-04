import { Card } from "./Card";

function ProjectCard() {
    return (
        <div>
            <h1>ProjectCard</h1>
        </div>
    );
}


function Projects() {
  return (
    <div className="w-full h-[800px] flex flex-col justify-center items-center bg-[#e56ef0]">
      <Card />
    </div>
  );
}

export { Projects };