import PortraitIcon from '@mui/icons-material/Portrait';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';


export default function Header({ hiddingFn }) {
 const menus = [
    { icon: <PortraitIcon />, label: 'Caleb Tuyisingize' },
    { icon: <BadgeIcon />, label: 'Work Experience' },
    { icon: <SchoolIcon />, label: 'Education' },
    { icon: <SyncAltIcon />, label: 'Skills' },
    { icon: <PermPhoneMsgIcon />, label: 'Contact' },
  ];

  return (
    <header className="sticky left-0 z-10 w-20 h-[calc(91vh-6rem)] rounded-bl-[30px] text-8xl bg-gray-800 text-white lg:flex lg:space-x-10 p-4 text-center">
      {menus.map((menu, i) => (
        <div
          key={i}
          className="profile scale-x-[2] scale-y-[2] cursor-pointer"
          onClick={() => hiddingFn(menu.label)}
        >
          {menu.icon}
          <br />
          <span className="hidden lg:flex">{menu.label}</span>
        </div>
      ))}
    </header>
  );
}
