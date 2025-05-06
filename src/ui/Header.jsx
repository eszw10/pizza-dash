import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-400 px-4 py-3 uppercase">
      <Link to="/" className="flex items-center gap-4">
        <img src="/logo.png" alt="logo" className="h-10 rounded-full" />
        <h2 className="tracking-widest">Pizza Dash co.</h2>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
