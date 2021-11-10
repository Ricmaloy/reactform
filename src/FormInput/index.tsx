import { InputHTMLAttributes, forwardRef } from "react";
import styled from "./FormInput.module.scss"

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    placeholder: string,
    label: string,
    type: string,
}

export const FormInput = forwardRef<HTMLInputElement, InputFormProps>(({name, placeholder, label, type}: InputFormProps, ref) => {
    return (
        <>
            <label 
                htmlFor={name} 
                className={styled.Label}
            >
            {label}
            </label>
            <input 
                type={type}
                placeholder={placeholder}
                ref={ref}
                className={styled.Input}
                id={name}
            />
        </>
    )
})