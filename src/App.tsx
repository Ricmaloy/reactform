import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";
import { FormInput } from "./FormInput";

import styled from './styles/app.module.scss'

function App() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({isTermsAccepted: false})

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(emailInputRef.current?.value.trim() === ''  ||
       !emailInputRef.current?.value.includes('@') || 
       (passwordInputRef.current?.value.split('').length || 0) < 8) {

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
    acceptTermsRef.current.isTermsAccepted = !acceptTermsRef.current.isTermsAccepted;
  }

  return (
    <div className={styled.Container}>
      <form 
        onSubmit={handleSubmit}
        className={styled.Form}
      >

        <FormInput 
          name="email" 
          placeholder="Insira seu email" 
          label="Email" 
          type="text" 
          ref={emailInputRef}
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
          ref={passwordInputRef}
          className={styled.Input}
          id="password"
        />

        <button type="submit" className={styled.Button}>Enviar</button>
        
        <button type="button" className={styled.AltButton} onClick={handleAcceptTerms}> Salvar dados </button>

      </form>
    </div>
  );
}

export default App;
