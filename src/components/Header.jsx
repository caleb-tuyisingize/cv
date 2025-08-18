import PortraitIcon from '@mui/icons-material/Portrait';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {Link} from 'react-router-dom';


export default function Header({ hiddingFn }) {
 const menus = [
   { icon: <PortraitIcon />, label: 'Caleb Tuyisingize', path: '/About' },
   { icon: <BadgeIcon />, label: 'Work Experience', path: '/Experience' },
   { icon: <PermPhoneMsgIcon />, label: 'Contact', path: '/Contact' },
   { icon: <AccessTimeFilledIcon />, label: 'Skills', path: '/Skills' },
   { icon: <SchoolIcon />, label: 'Education', path: '/Education' }
  ];

  return (
    <header className="sticky left-0 z-10 w-20 h-[calc(91vh-6rem)] lg:w-full lg:h-[calc(21vh-6rem)] rounded-bl-[30px] lg:rounded-bl-[0] lg:text-[12px] dark:bg-gray-800 text-gray-900 dark:text-white lg:flex lg:justify-between lg:px-20 lg:items-center lg:mt-[-50px] lg:pt-2 p-4 text-center">
      {menus.map((menu, i) => (
              <Link
          key={i}
          to={menu.path}
          className="profile focus:text-blue-900 lg:focus:scale-x-[1] ease-in-out duration-300 lg:focus:scale-y-[1] scale-x-[2] scale-y-[2] lg:scale-y-[1.2] lg:mt-[-2px] lg:scale-x-[1.2] cursor-pointer"
          onClick={() => hiddingFn(menu.label)}
        >
       
        <div 
          key={i}
          className="profile scale-x-[2] focus:border-2 scale-y-[2] mt-16 lg:mt-0 lg:scale-y-[1.2] lg:scale-x-[1.2] cursor-pointer"
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
