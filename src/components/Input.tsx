import React, { InputHTMLAttributes, forwardRef } from 'react';

// import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// A Ref do elemento foi redirecionada do componente pai para o filho, pois ref não é um atributo
// comum de um input, necessita desta tratativa, muito utilizado para inputs, selects, elementos de um form no geral

const Input: React.RefForwardingComponent<HTMLInputElement, IInputProps> = ({ name, label, ...rest }, ref) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>

            <input
                type="text"
                ref={ref}
                {...rest}
            />
        </div>
    );
}

export default forwardRef(Input);