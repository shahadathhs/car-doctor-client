import { BsFillMoonStarsFill } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";
import { GiBoomerangSun } from "react-icons/gi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center space-x-4 border-2 rounded-md shadow-md">
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" className="theme-controller"  />
        {
          theme === 'light' 
          ?
          <div className="text-2xl p-2"><GiBoomerangSun /></div>
          : 
          <div className="text-2xl p-2"><BsFillMoonStarsFill /></div> 
        }
      </label>
    </div>
  );
};

export default ThemeToggle;
