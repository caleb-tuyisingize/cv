export default function Skills() {
    const skills = [
    { name: "JavaScript (ES6+)", level: 85, color: 'bg-yellow-900' },
    { name: "React.js", level: 80, color: 'bg-blue-500' },
    { name: "Node.js", level: 70, color: 'bg-green-500' },
    { name: "HTML & CSS", level: 90, color: 'bg-red-900' },
    { name: "PHP", level: 65, color: 'bg-purple-600' },
    { name: "MariaDB / MySQL", level: 70, color: 'bg-orange-700' },
    { name: "PostgreSQL", level: 75, color: 'bg-blue-700' },
    { name: "Tailwind CSS", level: 80, color: 'bg-blue-800' },
  ];
  return (
        <>
            <div className="p-2 w-full  h-[calc(88vh-5rem)] overflow-y-scroll">
           <h1 className="text-4xl font-semibold"><span className="text-gray-900 font-bold">M</span>y <br /> <span className="text-gray-900 font-bold">C</span>urrent <br /> <span className="text-gray-900 font-bold">S</span>kills.</h1><br />
           <hr className="w-[99%] bg-gray-900 h-1"/><br />
           <br />
   <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`${skill.color} h-4 rounded-full`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
           </div>
        </>
  );
}
