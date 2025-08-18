export default function Education() {
  return (
        <>
            <div className="p-2  rounded-br-[35px] w-full h-[calc(89vh-5rem)] lg:h-[calc(79vh-5rem)] overflow-y-scroll">
           <h1 className="text-4xl font-semibold"><span className="text-gray-900 font-bold">M</span>y <br /> <span className="text-gray-900 font-bold">E</span>ducation <span className="text-gray-900 font-bold">S</span>tatus</h1><br />
           <hr className="w-[99%] bg-gray-900 h-1"/><br />
           <br />
{/* RP Tumba College */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">RP Tumba College of Technology</h3>
        <p className="text-gray-500">Rulindo, Rwanda</p>
        <p className="text-sm text-gray-400">2024 – Present</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Studying Information Technology with a focus on programming, databases, and ICT integration.</li>
          <li>Key subjects: Digital Electronics, Programming in C and JavaScript, Database Management (PostgreSQL), ICT in Education.</li>
          <li>Actively participating in projects, debates, and ICT-based initiatives.</li>
        </ul>
      </div>

      {/* Secondary School */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">Collegio Santo Antonio Maria Zaccaria TVET</h3>
        <p className="text-gray-500">Gicumbi, Rwanda</p>
        <p className="text-sm text-gray-400">2020 – 2023</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Graduated with a strong foundation in sciences and ICT.</li>
          <li>Developed early experience with <strong>PHP, MariaDB, HTML, CSS, and JavaScript</strong>.</li>
          <li>Participated in SOD-related projects and peer trainings.</li>
        </ul>
      </div>

      {/* Placeholder for Certificates or Additional Trainings */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">Additional Trainings / Certificates</h3>
        <p className="text-gray-500">ETC — Kigali, Kimisagara</p>
        <p className="text-sm text-gray-400">2022</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Software Development and IOT basics.</li>
        </ul>
      </div>
           </div>
        </>
  );
}
