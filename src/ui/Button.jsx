import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary", onClick }) {
  const base =
    "bg-yellow-400 text-sm text-stone-800 hover:bg-yellow-300 transition-colors duration-75 rounded-full uppercase tracking-wide font-semibold inline-block focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "text-stone-400 text-sm border border-stone-300 px-4 py-2.5 sm:px-6 sm:py-3.5 hover:bg-stone-200 hover:text-stone-800 transition-colors duration-75 rounded-full uppercase tracking-wide font-semibold inline-block focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
