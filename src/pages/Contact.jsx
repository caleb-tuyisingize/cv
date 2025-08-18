export default function Contact() {
  return (
        <>
            <div className="p-2 w-full h-[calc(89vh-5rem)] overflow-y-scroll">
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
          <p className="text-gray-500">You can add a contact form here later if you want people to send you messages directly.</p>
        </div>
      </div>
           </div>
        </>
  );
}
