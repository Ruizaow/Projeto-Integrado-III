import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX, } from 'react-icons/fi';
import About from "../assets/FeedPage/Sidebar/About.svg";
import OpenMap from "../assets/FeedPage/Sidebar/OpenMap.svg";
import Feed from "../assets/FeedPage/Sidebar/Feed.svg";
import Filter from "../assets/FeedPage/Sidebar/Filter.svg";
import Bookmark from "../assets/FeedPage/Sidebar/Bookmark.svg";
import Configuration from "../assets/FeedPage/Sidebar/Configuration.svg";
import Plus from "../assets/FeedPage/Sidebar/Plus.svg";
import './styles/Sidebar.css';

const Sidebar = ({ isCollapsed, setIsCollapsed, onCreatePost }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: <img src={About}       style={{width: "20px", height: "20px"}}/>, label: 'Sobre Nós', path: '/about' },
    { icon: <img src={OpenMap}       style={{width: "20px", height: "20px"}}/>, label: 'Mapa Aberto', path: '/openMap' },
    { icon: <img src={Feed}          style={{width: "20px", height: "20px"}}/>, label: 'Feed', path: '/' },
    { icon: <img src={Filter}        style={{width: "20px", height: "20px"}}/>, label: 'Filtro', path: '/' },
    { icon: <img src={Bookmark}    style={{width: "20px", height: "20px"}}/>, label: 'Pasta', path: '/pasta' },
    { icon: <img src={Configuration} style={{width: "20px", height: "20px"}}/>, label: 'Configurações', path: '/' }
  ];

  const footerItems = [
    { label: 'Precisa de ajuda?', path: '/help' }
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="sidebar-container">
      {/* Conteúdo Principal */}
      <nav className={`sidebar-nav ${isCollapsed ? 'collapsed' : ''}`}>
        <ul>
          <div className="upper-sidebar">
            {/* Itens do Menu Principal */}
            {menuItems.map((item, index) => (
              <li key={`menu-${index}`}>
                <button className="nav-item" onClick={() => navigate(item.path)}>
                  <span className="nav-icon">{item.icon}</span>
                  {!isCollapsed && <span className="nav-label">{item.label}</span>}
                </button>
              </li>
            ))}

            {/* Botão de Publicação */}
            <li className="publish-button-container">
              <button className="publish-button" onClick={onCreatePost}>
                <img src={Plus} style={{width: "14px", height: "14px"}}/>
                {!isCollapsed && <span>Nova Publicação</span>}
              </button>
            </li>
          </div>
          <div className="bottom-sidebar">
            {/* Itens do Footer (apenas quando expandido) */}
            {!isCollapsed && (
              <div className="sidebar-footer">
                {footerItems.map((item, index) => (
                  <li key={`footer-${index}`}>
                    <button className="footer-item" onClick={() => navigate(item.path)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </div>
            )}
          </div>
        </ul>
      </nav>
      {/* Botão de Toggle */}
      <button
        onClick={toggleSidebar}
        className={`toggle-btn ${!isCollapsed ? 'expanded' : ''}`}>
          {isCollapsed ? (
            <FiMenu size={25} />
          ) : (
            <FiX size={25} />
          )}
      </button>
    </div>
  );
};

export default Sidebar;