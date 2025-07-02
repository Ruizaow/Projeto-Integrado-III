// import { useState } from 'react';
import './About.css';
import GPetsLogo from "../assets/gpets-logo.png";
import ImagePlaceholder from "../assets/placeholder.svg";

const About = () => {
  // const [posts, setPosts] = useState([]);

  return (
    <div className="container">
        <div className="banner">
            <img src={GPetsLogo} alt="GPets_Logo" />
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
            <img src={ImagePlaceholder} alt="Placeholder" />
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
            <p> texto </p>
        </div>
    </div>
  );
};

export default About;