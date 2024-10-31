import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Layout as LayoutIcon,
  Users, 
  UserPlus, 
  GraduationCap, 
  FileText,
  BarChart,
  Menu
} from 'lucide-react';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const menuItems: MenuItem[] = [
    { 
      title: 'Dashboard', 
      icon: <LayoutIcon className="w-5 h-5" />, 
      path: '/' 
    },
    { 
      title: 'Vagas', 
      icon: <FileText className="w-5 h-5" />, 
      path: '/vagas' 
    },
    { 
      title: 'Candidatos', 
      icon: <Users className="w-5 h-5" />, 
      path: '/candidates' 
    },
    { 
      title: 'Talent Pool', 
      icon: <UserPlus className="w-5 h-5" />, 
      path: '/alumni' 
    },
  ];

  const isActivePath = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`
      fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 bg-white shadow-lg
    `}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    isActivePath(item.path) ? 'bg-gray-200' : ''
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;