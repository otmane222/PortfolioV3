import React from "react";

// Define a type for the SkillCard props
interface SkillCardProps {
  name: string;
}

function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="w-[200px] h-[100px] m-1 bg-[#707df0] flex flex-wrap items-center justify-center">
      <h1>{name}</h1>
    </div>
  );
}

// Define a type for the Skills props
interface SkillsProps {
  skills: string[];
}

function Skills( ) {
const skills = ["JavaScript", "React", "TypeScript", "CSS", "Node.js"];
  return (
    <div className="w-full h-[250px] bg-[#7feeaa] flex flex-wrap items-center justify-center">
      <h1>Skills</h1>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill} />
        ))}
      </div>
    </div>
  );
}

export { Skills };
