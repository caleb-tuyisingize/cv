import PortraitIcon from '@mui/icons-material/Portrait';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
export default function Header() {
  return (
    <header className="sticky left-0 z-10 w-20 h-[calc(91vh-6rem)] rounded-bl-[30px] text-8xl bg-gray-800 text-white lg:flex lg:space-x-10 p-4 text-center">
      <div className="profile scale-x-[2] scale-y-[2]"><PortraitIcon /><br /><span className='hidden lg:flex'>Caleb Tuyisingize</span></div>
      <div className="profile scale-x-[2] scale-y-[2]"><BadgeIcon /><br /><span className='hidden lg:flex'>Work Experience</span></div>
      <div className="profile scale-x-[2] scale-y-[2]"><SchoolIcon /><br /><span className='hidden lg:flex'>Education</span></div>
      <div className="profile scale-x-[2] scale-y-[2]"><SyncAltIcon /><br /><span className='hidden lg:flex'>Skills</span></div>
      <div className="profile scale-x-[2] scale-y-[2]"><PermPhoneMsgIcon /><br /><span className='hidden lg:flex'>Contact</span></div>
    </header>
  );
}
