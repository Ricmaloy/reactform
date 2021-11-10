import { FormEvent, useRef } from "react";
import { FormInput } from "./FormInput";

import styled from './styles/app.module.scss'

function App() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({isTermsAccepted: false})

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(emailInputRef.current?.value);
    console.log(passwordInputRef.current?.value);
    console.log(acceptTermsRef.current?.isTermsAccepted);
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
        {/* <label
          htmlFor="email" 
          className={styled.Label}
        >
          Email
        </label>
        <input 
          type="text"
          placeholder="Insira seu email"
          ref={emailInputRef}
          className={styled.Input}
          id="email"
        /> */}

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
