import './styles/About.css';
import { useState } from 'react';

import GPetsBlack from "../assets/About/GPets.png";
import Placeholder from "../assets/About/Placeholder.svg";
import Alert from "../assets/About/Alert.png"
import User from "../assets/About/User.png"
import Instagram from "../assets/About/Instagram.png"
import GitHub from "../assets/About/GitHub.png"

import Animal1 from "../assets/About/Explanation/Animal1.png";
import Animal2 from "../assets/About/Explanation/Animal2.png";
import Arrow1 from "../assets/About/Explanation/Arrow1.png";
import Arrow2 from "../assets/About/Explanation/Arrow2.png";
import Arrow3 from "../assets/About/Explanation/Arrow3.png";
import Arrow4 from "../assets/About/Explanation/Arrow4.png";
import Border1 from "../assets/About/Explanation/Border1.png";
import Border2 from "../assets/About/Explanation/Border2.png";
import Button1 from "../assets/About/Explanation/Button1.png";
import Button2 from "../assets/About/Explanation/Button2.png";
import Button3 from "../assets/About/Explanation/Button3.png";
import Button4 from "../assets/About/Explanation/Button4.png";
import Button5 from "../assets/About/Explanation/Button5.png";
import Button6 from "../assets/About/Explanation/Button6.png";
import GPetsWhite from "../assets/About/Explanation/GPets.png";
import Icon1 from "../assets/About/Explanation/Icon1.png";
import Icon2 from "../assets/About/Explanation/Icon2.png";
import Icon3 from "../assets/About/Explanation/Icon3.png";
import Particle1 from "../assets/About/Explanation/Particle1.png";
import Particle2 from "../assets/About/Explanation/Particle2.png";
import Particle3 from "../assets/About/Explanation/Particle3.png";
import Planet from "../assets/About/Explanation/Planet.png";
import Rocket1 from "../assets/About/Explanation/Rocket1.png";
import Rocket2 from "../assets/About/Explanation/Rocket2.png";
import Smoke1 from "../assets/About/Explanation/Smoke1.png";
import Smoke2 from "../assets/About/Explanation/Smoke2.png";
import Smoke3 from "../assets/About/Explanation/Smoke3.png";
import Smoke4 from "../assets/About/Explanation/Smoke4.png";
import Star1 from "../assets/About/Explanation/Star1.png";
import Star2 from "../assets/About/Explanation/Star2.png";
import Star3 from "../assets/About/Explanation/Star3.png";

import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

const About = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    return (
        <div className="container">
            <div className="visible-navbar"> <Navbar /> </div>
            <div className="occult-navbar"> <Navbar /> </div>
            
            <div className="page-container">
                <div className="sidebar-component">
                    <Sidebar
                        isCollapsed={isSidebarCollapsed}
                        setIsCollapsed={setIsSidebarCollapsed}
                    />
                </div>
                <div className="page-content">
                    <div className="banner">
                        <img src={GPetsBlack} />
                    </div>

                    <div className="about">
                        <div className="content">
                            <h1> Sobre nós </h1>
                            <p> <strong>GPets é uma plataforma colaborativa criada para ajudar animais perdidos ou em situação de
                                rua, conectando pessoas por meio de um mapa interativo.</strong> O projeto nasceu em uma extensão
                                universitária da Universidade Federal do Ceará (UFC), desenvolvido por estudantes apaixonados por
                                tecnologia e cuidado animal, em parceria com Mikaela Castro — estudante de Zootecnia, dedicada ao
                                bem-estar dos animais e idealizadora da proposta. Sem recursos financeiros, mas com muita vontade
                                de fazer a diferença, criamos essa ferramenta para unir forças com quem também quer ajudar. Porque
                                cuidar dos animais é, acima de tudo, um trabalho coletivo. </p>
                        </div>
                        <img src={Placeholder} />
                    </div>

                    <div className="values">
                        <div className="card">
                            <h1> Missão </h1>
                            <p style={{textAlign: "center"}}> Promover o reencontro entre animais e seus tutores, além de facilitar
                                o resgate e acolhimento de animais em situação de rua, por meio de uma plataforma digital acessível,
                                colaborativa e geolocalizada que conecta pessoas, voluntários, ONGs e clínicas veterinárias em uma
                                rede de cuidado e empatia. </p>
                        </div>
                        <div className="card">
                            <h1> Visão </h1>
                            <p style={{textAlign: "center"}}> Ser a principal referência nacional no uso da tecnologia para proteção
                                animal, tornando-se uma ferramenta indispensável para localizar, resgatar e apoiar animais desaparecidos
                                ou em situação de vulnerabilidade, incentivando uma cultura de responsabilidade e solidariedade. </p>
                        </div>
                        <div className="card">
                            <h1> Valores </h1>
                            <p> <strong>Empatia:</strong> Colocar o bem-estar animal no centro de todas as ações. <br/>
                                <strong>Colaboração:</strong> Unir esforços entre usuários, voluntários, ONGs e clínicas para alcançar resultados reais. <br/>
                                <strong>Transparência:</strong> Manter uma comunicação clara, honesta e ética entre todos os envolvidos. <br/>
                                <strong>Responsabilidade social:</strong> Incentivar o cuidado consciente com os animais e o meio ambiente. </p>
                        </div>
                    </div>

                    <div className="explanation">
                        <img className="img-border" style={{marginRight: "52.5rem"}}
                            src={Border1}
                        />
                        <div className="content">
                            <h1> Como o GPets funciona? </h1>
                            <div className="line-1">
                                <h2> É aqui que você <br/>
                                    começa! </h2>
                                <img className="img-arw-1" src={Arrow1} />
                                <div className="column-1">
                                    <img className="img-part-1" src={Particle1} />
                                    <div className="button-1">
                                        <img className="btn-1" src={Button1} />
                                        <img className="btn-2" src={Button2} />
                                        <p> Fazer postagem </p>
                                    </div>
                                    <h3> Vá para a página de “<strong>Feed</strong>” e <br/>
                                        clique no botão inferior a <br/>
                                        esquerda “<strong>Postar</strong>” </h3>
                                </div>
                                <img className="img-arw-2" src={Arrow2} />
                                <div className="column-2">
                                    <h2> Você escolhe </h2>
                                    <div className="button-2">
                                        <img className="btn-3" src={Button3} />
                                        <img className="btn-4" src={Button4} />
                                        <p> Pet perdido </p>
                                    </div>
                                    <h2> ou </h2>
                                    <div className="button-3">
                                        <img className="btn-5" src={Button5} />
                                        <img className="btn-6" src={Button6} />
                                        <p> Pet em situação de rua </p>
                                    </div>
                                </div>
                                <div className="column-3">
                                    <p style={{marginLeft: "-2rem"}}>
                                        Faça essa postagem caso o seu <br/>
                                        pet ou de um conhecido foi <br/>
                                        perdido. <strong> Foto, nome, sexo e <br/>
                                        local onde foi perdido</strong> são itens <br/>
                                        obrigatórios </p>
                                    <p> Faça essa postagem caso você <br/>
                                        tenha encontrado um pet em <br/>
                                        situação de rua. <strong> Foto, descrição <br/>
                                        e localização de onde foi <br/>
                                        encontrado</strong> são itens <br/>
                                        obrigatórios. </p>
                                </div>
                            </div>
                            <div className="assets-1">
                                <img src={Star1} />
                                <h2> Agora é so postar... </h2>
                            </div>
                            <div className="line-2">
                                <img className="img-rckt-1" src={Rocket1} />
                                <img className="img-smoke-2" src={Smoke2} />
                                <div className="column-4">
                                    <img src={Smoke1} />
                                    <div className="assets-2">
                                        <img className="img-star-3" src={Star3} />
                                        <img className="img-star-2" src={Star2} />
                                    </div>
                                </div>
                            </div>
                            <div className="line-3">
                                <div column-5>
                                    <img className="img-rckt-2" src={Rocket2} />
                                    <img className="img-smoke-4" src={Smoke4} />
                                    <img className="img-smoke-3" src={Smoke3} />
                                </div>
                                <img className="img-planet" src={Planet} />
                            </div>
                            <div className="line-4">
                                <h2> Seu pedido vai ser <br/>
                                    visto pelos usuários </h2>
                                <img src={Arrow3} />
                            </div>
                            <h3> Várias pessoas unidas num só lugar! </h3>
                            <div className="line-5">
                                <div className="info-column">
                                    <div className="card">
                                        <img className="icon1" src={Icon1} />
                                    </div>
                                    <p> Podem trocar informações <br/>
                                        importantes dentro dos <br/>
                                        comentários da postagem ou <br/>
                                        compartilhar direto nas suas <br/>
                                        redes sociais.  </p>
                                </div>
                                <div className="info-column">
                                    <div className="card">
                                        <img className="icon2" src={Icon2} />
                                    </div>
                                    <p> Conectando pessoas de todos <br/>
                                        os lugares, ONGs, instituições <br/>
                                        veterinarias e clinicas. </p>
                                </div>
                                <div className="info-column">
                                    <div className="card">
                                        <img className="icon3" src={Icon3} />
                                    </div>
                                    <p> Pedindo ajuda a aqueles que <br/>
                                        estão mais próximos do local <br/>
                                        em que o pet foi avistado <br/>
                                        pela ultima vez. </p>
                                </div>
                            </div>
                            <img className="img-arw-4" src={Arrow4} />
                            <div className="line-6">
                                <img src={Particle2} />
                                <div className="button-3">
                                    <div className="animals-icon">
                                        <img className="cat" src={Animal1} />
                                        <img className="dog" src={Animal2} />
                                    </div>
                                    <p> Ajude a <br/>Resgatar </p>
                                </div>
                                <img src={Particle3} />
                            </div>
                            <h2 className="final-message"> Assim, você e eu podemos ajudar aquele que <br/>
                                mais precisa, forma que conseguimos ajudar! </h2>
                            <img src={GPetsWhite} />
                        </div>
                        <img className="img-border" style={{marginLeft: "52.5rem"}}
                            src={Border2}
                        />
                    </div>

                    <div className="alertBar">
                        <div className="bar">
                            <div className="content">
                                <img src={Alert} />
                            </div>
                        </div>
                    </div>

                    <div className="contentInfo">
                        <div className="history">
                            <div className="interface">
                                <img src={User} />
                            </div>
                            <div className="info">
                                <h1> história comovente </h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque <br/>
                                    elit metus, tincidunt ut orci nec, faucibus feugiat ante. Maecenas <br/>
                                    cursus libero quam, non aliquet lacus sodales ut </p>
                            </div>
                        </div>
                        <div className="select">
                            <div className="selectedCircle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>

                    <div className="faq">
                        <div className="questions">
                            <h1> Perguntas </h1>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <div className="interface">
                            <img src={User} />
                        </div>
                    </div>

                    <div className="help">
                        <h1> Outras formas de ajudar </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit metus, <br/>
                            tincidunt ut orci nec, faucibus feugiat ante. Maecenas cursus libero quam, non <br/>
                            aliquet lacus sodales ut </p>
                        <div className="images">
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                        </div>
                    </div>

                    <footer>
                        <div className="info">
                            <h1> GPets </h1>
                            <p> contato </p>
                            <p> faça doações para o projeto! </p>
                            <p> parcerias </p>
                            <img className="img-insta" src={Instagram} />
                            <img className="img-git" src={GitHub} />
                        </div>
                        <div className="contact">
                            <p> XXXXXXXXXXXX  </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default About;