export default function Contact() {
  return (
        <>
          <div className="ease-in-out duration-300 rounded-br-[35px] p-2 lg:h-[calc(83vh-5rem)] lg:mt-6 w-full h-[calc(89vh-5rem)] overflow-y-scroll">
           <h1 className="text-4xl font-semibold"><span className="text-gray-900 font-bold">M</span>y <br /> <span className="text-gray-900 font-bold">C</span>urrent <br /> <span className="text-gray-900 font-bold">C</span>ontact</h1><br />
           <hr className="w-[99%] bg-gray-900 h-1"/><br />
           <br />
             <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
        {/* Email */}
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-700">calebmevis@gmail.com</p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-700">+250 792 435 990</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-gray-700">Nyarugenge, Kigali, Rwanda</p>
        </div>

        {/* Social links */}
        <div>
          <h3 className="text-xl font-semibold">Social Links</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="#" className="text-blue-900 hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com/caleb-tuyisingize" className="text-blue-900 hover:underline">GitHub</a></li>
            <li><a href="http://x.com/CalebMevis32470" className="text-blue-900 hover:underline">X</a></li>
            <li><a href="https://www.instagram.com/meviscaleb11/" className="text-blue-900 hover:underline">Instagram</a></li>
            <li><a href="https://www.facebook.com/tuyisingize.caleb/" className="text-blue-900 hover:underline">Facebook</a></li>
          </ul>
        </div>

        {/* Message / Contact form placeholder */}
        <div>
          <h3 className="text-xl font-semibold">Message Me</h3>
          <div className="w-full">
            <textarea name="" id="" className="bg-gray-900 min-w-full rounded-lg min-h-[100px] max-h-[100px] lg:min-h-[200px] p-6 text-white"></textarea><br />
            <button className="lg:mx-[30%] hover:scale-x-[1.1] duration-200 easy-in-out hover:scale-y-[1.1] border-2 p-5 lg:w-[40%] w-full rounded-xl bg-gray-900 text-white text-2xl">Send</button>
          </div>
         
        </div>
      </div>
           </div>
        </>
  );
}
