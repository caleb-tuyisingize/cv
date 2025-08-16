import PortraitIcon from '@mui/icons-material/Portrait';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import {Link} from 'react-router-dom';
import Experience from "../pages/experience.jsx";

export default function Header({ hiddingFn }) {
 const menus = [
    { icon: <PortraitIcon />, label: 'Caleb Tuyisingize', path: '/about' },
    { icon: <BadgeIcon />, label: 'Work Experience', path: '/Experience' },
    { icon: <SchoolIcon />, label: 'Education', path: '/education' },
    { icon: <SyncAltIcon />, label: 'Skills', path: '/skills' },
    { icon: <PermPhoneMsgIcon />, label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky left-0 z-10 w-20 h-[calc(91vh-6rem)] rounded-bl-[30px] text-8xl bg-gray-800 text-white lg:flex lg:space-x-10 p-4 text-center">
      {menus.map((menu, i) => (
        <Link to={menu.path} className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-200">
        <div 
          key={i}
          className="profile scale-x-[2] scale-y-[2] cursor-pointer"
          onClick={() => hiddingFn(menu.label)}
        >
          {menu.icon}
          <br />
          <span className="hidden lg:flex">{menu.label}</span>
        </div>
      </Link>
      ))
    }
    </header>
  );
}
