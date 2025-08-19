
import img from '../assets/484111425_954810350200533_7393034346948912363_n.jpg';
export default function Header() {
  return (
        <>
            <div id='hider' className="card h-[calc(89vh-5rem)] lg:h-[calc(99vh-5rem)] xl:h-[calc(99vh-5rem)] lg:mt-10 xl:mt-10 px-2 lg:px-12 xl:px-12 w-full content-center dark:bg-gray-900">
                <div className="info lg:flex xl:flex lg:mx-auto lg:items-center xl:w-[calc(90%-3rem)] lg:w-[calc(90%-3rem)]">

                <img src={img} alt="" className='w-96 h-96 mx-auto rounded-full object-cover dark:border-gray-200 border-6 border-gray-900'/><br />
                <div className="good">
                <h2 className="text-4xl text-center font-bold dark:text-white">Caleb Tuyisingize</h2><br />
                <p className="text-center text-2xl dark:text-white">FullStack Developer</p>
                </div>
                </div>
         
                
            </div>
        </>
  );
}
