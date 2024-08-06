import { USERNAME } from "../constants";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  title: string;
}

const NavbarTop = ({ title }: Props) => {
  return (
    <nav className="flex bg-slate-800 text-white h-12 mb-4 justify-between items-center px-4 sticky top-0 z-50 shadow-md border-b-2 border-slate-400">
      <div>{title}</div>

      <div className="flex gap-3 items-center">
        <div>{localStorage.getItem(USERNAME) || "Hugh Mungus"}</div>
        <div className="bg-slate-400 rounded-full p-1">
          <PersonIcon></PersonIcon>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
