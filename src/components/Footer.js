// components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto md:px-24 px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>

        <div className="flex items-center space-x-2 mb-4">
        <img src="/logo.png" alt="Blink Logo" className="w-12 h-12 mb-4" /> 
        <span className="text-2xl font-black text-black">Blink</span>
        </div>

          <div className="space-y-2">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 fill-[#387FF7]" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> 
              <p> &nbsp;&nbsp;<a href="mailto:support@blink.com">support@blink.com</a></p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6- ml-2 fill-[#387FF7]" ><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> 
             <p> &nbsp;&nbsp;<a href="tel:+123456789">+1 234 567 89</a></p>
            </div>
          </div>
        </div>

        <div>

        </div>

      <div className="md:flex md:ml-auto">
        {/* Links Column */}
        <div className="md:mb-0 mb-8" style={{width: 'fit-content', marginRight: '3rem'}}>
          <h3 className="font-bold text-[24px] mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div style={{width: 'fit-content'}}>
          <h3 className="font-bold text-[24px] mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-[#6969692e] mt-6 py-8 text-center md:mx-24 mx-6">
        <p>&copy; Copyright {currentYear} Blink. all rights reserved.</p>
      </div>
    </footer>
  );
}