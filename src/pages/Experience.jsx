export default function Experience() {
  return (
        <>
        <div className="ease-in-out duration-300 rounded-br-[35px] p-2 lg:h-[calc(83vh-5rem)] lg:mt-6 w-full h-[calc(89vh-5rem)] overflow-y-scroll">
           <h1 className="text-4xl font-semibold"><span className="text-gray-900 font-bold">W</span>ork <br /> <span className="text-gray-900 font-bold">E</span>xperience</h1><br />
           <hr className="w-[99%] bg-gray-900 h-1"/><br />
           <br />

      {/* GYM Rwanda Training */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">Full Stack Development Trainee</h3>
        <p className="text-gray-500">GYM Rwanda — Kigali, Rwanda</p>
        <p className="text-sm text-gray-400">Jan 2025 – Present</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Learning modern web technologies including <strong>React, JavaScript ES6+, Node.js</strong>, and databases like <strong>PostgreSQL</strong>.</li>
          <li>Practicing **problem-solving and coding katas** to strengthen algorithmic thinking.</li>
          <li>Working on real-life projects such as building CV websites, CRUD applications, and API integrations.</li>
          <li>Developing teamwork and project presentation skills through collaborative exercises.</li>
        </ul>
      </div>

      {/* SOD Training */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">Student Training on SOD Development</h3>
        <p className="text-gray-500">Independent — Rwanda</p>
        <p className="text-sm text-gray-400">2024</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Trained students on **System-Oriented Development (SOD)** using <strong>PHP, JavaScript, HTML, CSS</strong> and databases like <strong>MariaDB/MySQL</strong>.</li>
          <li>Designed practical exercises to help students build functional web applications.</li>
          <li>Applied knowledge from secondary school experience with PHP and MariaDB to guide students effectively.</li>
        </ul>
      </div>

      {/* RP Tumba College IT background */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">IT Student</h3>
        <p className="text-gray-500">RP Tumba College of Technology — Rulindo, Rwanda</p>
        <p className="text-sm text-gray-400">2023 – Present</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Studying core subjects such as **Digital Electronics, Programming (C, JavaScript), Databases (PostgreSQL)**, and ICT in education.</li>
          <li>Actively participating in debates, presentations, and ICT integration projects.</li>
          <li>Exploring startup ideas and entrepreneurial projects to apply technology in real-world contexts.</li>
        </ul>
      </div>

      {/* Freelance & Personal Projects */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold">Freelance & Personal Projects</h3>
        <p className="text-gray-500">Independent — Rwanda</p>
        <p className="text-sm text-gray-400">2024 – Present</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Building and deploying personal websites with <strong>React + TailwindCSS</strong>.</li>
          <li>Practicing **problem-solving with JavaScript (functions, closures, async/await)**.</li>
          <li>Designing mockups with **Adobe XD** and implementing UI/UX features like hover effects, transitions, and icons.</li>
        </ul>
      </div>
        </div>
        </>
  );
}
