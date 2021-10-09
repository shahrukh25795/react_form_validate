import React from 'react'

interface InputFieldProps {
    label: string | number;
    value: string;
    id?: string;
    onChange: () => void;
    type?: string;
    name?: string;
    className?: string;
}

const InputField = ({ label, value, id, onChange, type = "text", name, className, ...props }: InputFieldProps) => {
    return (
        <div className={`input-box ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} value={value || ""} id={id} />
        </div>
    )
}

export default InputField
