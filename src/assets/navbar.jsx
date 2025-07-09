import './navbar.css' // nao esquecer do ponto barra
import logo from '../src/assets/marca.svg'
import perfil from './assets/perfil.svg'
import sino from './assets/sino.svg'

export default function Navbar(){
    return (
         <nav className='navbar'>
               <div className='nav_logoGrupo'>
                    <img src={logo} className='navbar_img'/>
                    
                    <h1 className='navbar_logo'>GPets</h1>

                </div>
            <div className='navbar_container'>
                 <div className='barra_pesquisa'>
                            <input
                                type='text'
                                className='search_input'
                                placeholder='Pesquisar...'>
                            </input>
                </div>


                <div className='nav_direita'>
                    <img src={sino} className='nav_sino'></img>
                    <img src={perfil} className='nav_perfil'></img>
                </div>
                

            </div>
         </nav>
    )
}

//usar o filter nos eelmentos > assionar o filter no on change
//mudar a cor dos svg 
