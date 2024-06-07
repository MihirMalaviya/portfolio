import React from "react";

const skills = {
  LANGUAGES: [
    "JavaScript (ES6)",
    "TypeScript",
    "HTML",
    "CSS/Sass",
    "Python",
    "SQL",
    "R",
  ],
  FRAMEWORKS: [
    "Ember & Glimmer",
    "React",
    "Jekyll",
    "Node",
    "D3",
    "Wordpress",
    "Timber",
  ],
  TOOLS: [
    "Bash",
    "Git & Github",
    "Gulp & Grunt",
    "Chrome DevTools",
    "Postman",
    "MongoDB",
  ],
  DESIGN: [
    "Sketch",
    "InDesign",
    "InVision",
    "Prototyping",
    "Wireframing",
    "User Testing",
  ],
};

const SkillsTable = () => {
  return (
    <div className="text-white p-8">
      <h2 className="my-20 mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">
        Skills
      </h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {Object.keys(skills).map((category, idx) => (
              <th key={idx} className="text-left py-2 text-slate-300">
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(skills).map((items, idx) => (
              <td key={idx} className="py-2">
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx} className="mb-1 text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
