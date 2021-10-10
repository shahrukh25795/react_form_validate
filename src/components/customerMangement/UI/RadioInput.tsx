import React from 'react'

interface RadioInputProps {
    label: string;
    id?: string;
    value: string;
    name?: string;
    checked: boolean;
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = (props: RadioInputProps) => {

    const { id, label, value, onChange, name = "residential_proof", checked } = props

    return (
        <div className="radio-box">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                style={{ display: "none" }}
                className="radio-input"
            />
            <label className="radio-label" htmlFor={id}>
                <span className="dot" />
                <span className="name">{label}</span>
            </label>
        </div>
    )
}

export default RadioInput
