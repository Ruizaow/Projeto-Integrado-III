import './styles/AuthPopup.css'
import { useState } from 'react';

import { FiX, } from 'react-icons/fi';
import GPetsLogo from "../../assets/FeedPage/AuthPopup/GPetsLogo.svg";
import ProfileIcon from "../../assets/FeedPage/AuthPopup/Profile.svg";

export default function AuthPopup({ onClose }) {
    const [currentView, setCurrentView] = useState("auth");

    function renderContent() {
        switch (currentView) {
            case "auth":
                return (
                    <div className="auth-view">
                        <h3>Bem vindo! Cadastre-se como <br/>
                            <strong>pessoa</strong> física ou <strong>instituição</strong> para continuar</h3>
                        
                        <img src={GPetsLogo} alt="Logo"/>

                        <div className="register-field">
                            <button className="register-btn" onClick={() => setCurrentView("registerUser")}>
                                Pessoa física
                            </button>
                            <button className="register-btn" onClick={() => setCurrentView("registerInstitution")}>
                                Instituição de <br/> ajuda animal
                            </button>
                        </div>
                        
                        <button className="login-btn" onClick={() => setCurrentView("login")}>
                            Entrar
                        </button>

                        <h3>Caso já tenha cadastro, entre para <br/> acessar sua conta</h3>
                    </div>
                );
            
            case "login":
                return (
                    <div className="auth-view">
                        <h1> Entrar na Conta </h1>

                        <img src={ProfileIcon} className="profile-icon" alt="Logo"/>

                        <div className="input-fields">
                            <div className="input-field">
                                <label>Login:</label>
                                <input name="name" type="text" placeholder="Digite seu email ou número de contato" />
                            </div>
                            <div className="input-field">
                                <label>Senha:</label>
                                <input name="contact" type="password" placeholder="Digite sua senha" />
                            </div>
                        </div>

                        <h3 className="forget-password" onClick={() => setCurrentView("recoverPassword")}> Esqueci a senha </h3>

                        <div className="buttons">
                            <button className="cancel-btn" onClick={() => setCurrentView("auth")}>
                                Voltar
                            </button>
                            <button className="confirm-btn">
                                Entrar
                            </button>
                        </div>
                    </div>
                );

            case "registerUser":
                return (
                    <div className="auth-view">
                        <h1> Cadastro de Usuário </h1>

                        <img src={ProfileIcon} className="profile-icon" alt="Logo"/>

                        <div className="input-fields">
                            <div className="input-field">
                                <label>Nome:</label>
                                <input name="name" type="text" placeholder="Digite seu nome" />
                            </div>
                            <div className="input-field">
                                <label>Contato:</label>
                                <input name="contact" type="text" placeholder="Digite seu email ou número" />
                            </div>
                            <div className="input-field">
                                <label>Senha:</label>
                                <input name="contact" type="password" placeholder="Digite sua senha" />
                            </div>
                            <div className="input-field">
                                <label>Confirmar senha:</label>
                                <input name="contact" type="password" placeholder="Digite sua senha novamente" />
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="cancel-btn" onClick={() => setCurrentView("auth")}>
                                Voltar
                            </button>
                            <button className="confirm-btn">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                );

            case "registerInstitution":
                return (
                    <div className="auth-view">
                        <h1> Cadastro de Instituição </h1>

                        <img src={ProfileIcon} className="profile-icon" alt="Logo"/>

                        <div className="input-fields">
                            <div className="input-field">
                                <label>Nome:</label>
                                <input name="name" type="text" placeholder="Digite o nome da instituição" />
                            </div>
                            <div className="input-field">
                                <label>CNPJ:</label>
                                <input name="name" type="text" placeholder="Digite o CNPJ da instituição" />
                            </div>
                            <div className="input-field">
                                <label>Contato:</label>
                                <input name="contact" type="text" placeholder="Digite o email ou número da instituição" />
                            </div>
                            <div className="input-field">
                                <label>Senha:</label>
                                <input name="contact" type="password" placeholder="Digite sua senha" />
                            </div>
                            <div className="input-field">
                                <label>Confirmar senha:</label>
                                <input name="contact" type="password" placeholder="Digite sua senha novamente" />
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="cancel-btn" onClick={() => setCurrentView("auth")}>
                                Voltar
                            </button>
                            <button className="confirm-btn">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                );

            case "recoverPassword":
                return (
                    <div className="auth-view">
                        <div className="recover-password-label">
                            <h2> Esqueceu sua senha? </h2>
                            <p> Enviaremos um e-mail para você <br/> redefinir sua senha </p>

                            <div className="input-field">
                                <label>Email:</label>
                                <input name="contact" type="email" placeholder="Digite seu email" />
                            </div>
                        </div>
                        <div className="recover-buttons">
                            <button className="send-email-btn"> Enviar </button>
                            <button className="cancel-btn" onClick={() => setCurrentView("login")}> Voltar </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };
    
    return (
        <div className="auth-overlay">
            <div className={`auth-box auth-view-${currentView}`}>
                <div className="close-icon">
                    <FiX
                        size={26}
                        className={"X-icon"}
                        onClick={onClose}
                    />
                </div>
                {renderContent()}
            </div>
        </div>
    );
}