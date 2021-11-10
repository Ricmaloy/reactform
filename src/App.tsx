import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import styled from './styles/app.module.scss'

function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isTermsAccepted, setIsTermsAccepted] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(email.trim() === '' || !email.includes('@') || password.length < 8) {

      toast.error('🚨 Acesso Negado!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });

      return;
    }

    toast.success('🦄 Acesso Permitido!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
  }

  function handleAcceptTerms() {
    setIsTermsAccepted(!isTermsAccepted);
  }

  return (
    <div className={styled.Container}>
      <form 
        onSubmit={handleSubmit}
        className={styled.Form}
      >
        <label 
          htmlFor="email" 
          className={styled.Label}
        >
          Senha
        </label>
        <input 
          type="text"
          placeholder="Insira seu email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className={styled.Input}
          id="email"
        />

        <label 
          htmlFor="password" 
          className={styled.Label}
        >
          Senha
        </label>
        <input 
          type="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className={styled.Input}
          id="password"
        />

        <button type="submit" className={styled.Button} disabled={!isTermsAccepted}>Enviar</button>
        
        <button type="button" className={styled.AltButton} onClick={handleAcceptTerms}> Salvar dados </button>

      </form>
    </div>
  );
}

export default App;