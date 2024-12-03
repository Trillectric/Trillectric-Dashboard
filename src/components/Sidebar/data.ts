import homeIcon from '../../assets/nhome.svg';
import siteIcon from '../../assets/sites.svg';
import reportIcon from '../../assets/report.svg';
import messageIcon from '../../assets/message.svg';
import alertIcon from '../../assets/nalert.svg';
import settingsIcon from '../../assets/settingss.svg';
import profileIcon from '../../assets/prof.svg';
import logoutIcon from '../../assets/logout.svg';

export const sidebarLinks = [
  { name: 'Overview', path: '/dashboard', icon: homeIcon },
  { name: 'Sites', path: '/reports', icon: siteIcon },
  { name: 'Reports', path: '/alerts', icon: reportIcon },
  { name: 'Service Message', path: '/service', icon: messageIcon },
  { name: 'Maintenance', path: '/maintenance', icon: alertIcon },

  { name: 'Settings', path: '/settings', icon: settingsIcon, position: 'center' },

  { name: 'Nisha Bhatt', path: '/profile', icon: profileIcon, position: 'bottom' },
  { name: 'Logout', path: '/logout', icon: logoutIcon, position: 'bottom' },
];
