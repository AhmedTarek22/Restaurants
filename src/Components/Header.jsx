function Header() {
  return (
    <div className="w-full text-white flex items-center justify-between">
      <h2 className="text-2xl lg:text-4xl">Restaurant</h2>
      <ul className="flex gap-7">
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">Home</li>
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">Menu</li>
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">How to order</li>
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">Popular dishes</li>
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">Latest new</li>
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">Offers</li>
        <li className="cursor-pointer hover:text-[#E86A33] duration-500">Contact us</li>
      </ul>
      <div className="flex gap-4">
        <button className="py-1 px-2 border-[1px] border-[#E86A33] text-[#E86A33] bg-transparent rounded-lg">
          <a href="Login.jsx">Login</a>
        </button>
        <button className="py-1 px-2 bg-[#E86A33] rounded-lg">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
