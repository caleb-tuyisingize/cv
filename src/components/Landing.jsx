
import img from '../assets/484111425_954810350200533_7393034346948912363_n.jpg';
export default function Header() {
  return (
        <>
            <div id='hider' className="card h-[calc(89vh-5rem)] lg:h-[calc(99vh-5rem)] lg:mt-10 px-2 lg:px-12 w-full content-center dark:bg-gray-900">
                <div className="info lg:flex lg:items-center">

                <img src={img} alt="" className='w-96 h-96 mx-auto rounded-full object-cover border-6 border-gray-900'/><br />
                <div className="good">
                <h2 className="text-4xl text-center font-bold dark:text-white">Caleb Tuyisingize</h2><br />
                <p className="text-center text-2xl dark:text-white">FullStack Developer</p>
                </div>
                </div>
         
                
            </div>
        </>
  );
}
