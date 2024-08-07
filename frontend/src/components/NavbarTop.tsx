import { USERNAME } from "../constants";
import PersonIcon from "@mui/icons-material/Person";
import AddProductBtn from "./AddProductBtn";

interface Props {
  title: string;
}

const NavbarTop = ({ title }: Props) => {
  return (
    <nav className="flex bg-gradient-to-r from-slate-700 to-slate-900 text-white h-12 justify-between items-center px-4 sticky top-0 z-50 shadow-md shadow-white border-b-2 border-slate-400">
      <div className="flex gap-8 items-center">
        {title}
        <AddProductBtn />
      </div>

      <div className="flex gap-3 items-center hover:bg-slate-700 px-2 py-1 rounded-lg">
        <div>{localStorage.getItem(USERNAME) || "Hugh Mungus"}</div>
        <div className="bg-slate-400 rounded-full p-1">
          <PersonIcon></PersonIcon>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
