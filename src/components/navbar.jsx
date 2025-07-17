import './navbar.css' // nao esquecer do ponto barra
import logo from '../assets/marca.svg'
import { FaBell, FaUser } from 'react-icons/fa';
import {FiMessageSquare,FiUser} from "react-icons/fi";
/*
  const navItems = [
    { icon: <IoMdNotificationsOutline size={20} />, label: 'Notificacao', path: '/messages' },
    { icon: <FisUser size={20} />, label: 'perfil', path: '/perfil' },
  ];*/
 // Importando ícones

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_container'> 
        <div className='nav_logoGrupo'>
          <img src={logo} className='navbar_img'/>
          <h1 className='navbar_logo'>GPets</h1>
        </div>

        <div className='barra_pesquisa'>
          <input
            type='text'
            className='search_input'
            placeholder='Pesquisar...'
          />
        </div>

        <div className='nav_direita'>
          <FiMessageSquare size={24} color='rgba(50, 58, 66, 1)' ></FiMessageSquare>
           <FiUser size={24} color='rgba(50, 58, 66, 1)'></FiUser>
        </div>
      </div> 
    </nav>
  );
}

//usar o filter nos eelmentos > assionar o filter no on change
//mudar a cor dos svg 
