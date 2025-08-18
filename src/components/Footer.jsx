
export default function Footer(){
    return (
        <footer className="bg-gray-800 text-white p-4 bottom-0  w-full lg:h-20">
            <div className="container mx-auto text-center  lg:flex lg:justify-between z-index-10">
                <div className="left">

                <p className="text-sm"><span className="text-gray-200 font-bold">Caleb Tuyisingize</span> <br /> <span className="text-gray-400">Software Engineer | Backend Specialist | Full-Stack Developer</span></p>
                </div>
                <div className="names">

                <p>&copy; {new Date().getFullYear()} Caleb Tuyisingize. All rights reserved.<br /><span className="text-gray-400"> Built with React + Three.js + Tailwind CSS. by Tuyisingize Caleb</span></p>
                </div>
            </div>
        </footer>
    );
}
