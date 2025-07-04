import { useState } from 'react';
import {
  FiHome,
  FiUser,
  FiFolder,
  FiFilter,
  FiSettings,
  FiMessageSquare,
  FiPlus,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: <FiHome size={20} />, label: 'Mapa Aberto', path: '/' },
    { icon: <FiUser size={20} />, label: 'Feed', path: '/profile' },
    { icon: <FiFilter size={20} />, label: 'Filtro', path: '/filter' },
    { icon: <FiMessageSquare size={20} />, label: 'Mensagem', path: '/messages' },
    { icon: <FiFolder size={20} />, label: 'Pasta', path: '/folder' },
    { icon: <FiSettings size={20} />, label: 'Configurações', path: '/settings' }
  ];

  const footerItems = [
    { label: 'Sobre nós', path: '/about' },
    { label: 'Precisa de ajuda?', path: '/help' }
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Botão de Toggle */}
      <button onClick={toggleSidebar} className="toggle-btn">
        {isCollapsed ? (
          <FiMenu size={25} />
        ) : (
          <FiX size={25} />
        )}
      </button>

      {/* Conteúdo Principal */}
      <nav className="sidebar-nav">
        <ul>
          {/* Itens do Menu Principal */}
          {menuItems.map((item, index) => (
            <li key={`menu-${index}`}>
              <a href={item.path} className="nav-item">
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
              </a>
            </li>
          ))}

          {/* Botão de Publicação */}
          <li className="publish-button-container">
            <button className="publish-button">
              <FiPlus size={18} />
              {!isCollapsed && <span>Nova Publicação</span>}
            </button>
          </li>

          {/* Itens do Footer (apenas quando expandido) */}
          {!isCollapsed && (
            <div className="sidebar-footer">
              {footerItems.map((item, index) => (
                <li key={`footer-${index}`}>
                  <a href={item.path} className="footer-item">
                    {item.label}
                  </a>
                </li>
              ))}
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
