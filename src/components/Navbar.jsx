import './styles/Navbar.css'
import logo from '../assets/FeedPage/Navbar/marca.svg'
import lupa from '../assets/FeedPage/Navbar/lupa.svg'
import perfil from '../assets/FeedPage/Navbar/perfil.svg'
import {FiMessageSquare} from "react-icons/fi";

export default function Navbar({ onProfileClick }){
    return (
        <nav className='navbar_container'>
            <div className='nav_esquerda'>
                <img src={logo}/>
                <div className='barra_pesquisa'>
                    <input type='text' placeholder='Pesquisar...'/>
                    <img src={lupa}/>
                </div>
            </div>
            <div className='nav_direita'>
                <FiMessageSquare
                    size={35}
                    color='rgba(50, 58, 66, 1)'
                    className='nav_perfil_icons_fi'>
                </FiMessageSquare>
                <img
                    src={perfil}
                    className='nav_perfil'
                    style={{cursor: 'pointer'}}
                    onClick={onProfileClick}
                />
            </div>
        </nav>
    )
}

//usar o filter nos elementos > acionar o filter no on change