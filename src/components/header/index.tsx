export default function Header() {
    return (
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src="/assets/Logo.svg" alt="Logo" className="h-12" />
  
        {/* Menu */}
        <div className="flex gap-6 text-white-800 font-medium items-center">
          <a href="./" className="cursor-pointer hover:text-gray-500">Home</a>
          <a href="#about" className="cursor-pointer hover:text-gray-500">About</a>
          <a href="#contact" className="cursor-pointer hover:text-gray-500">Contact</a>
          <button className="bg-[#977656] hover:bg-[#977756b1] text-white font-bold py-2 px-4 rounded">Schedule</button>
        </div>
      </nav>
    );
  }
  