import React from 'react';
import { BooleanFieldStyle, Container, Label, RequiredAsterisk } from './style';


const BooleanField = ({ label, id, isChecked, onChange, required, disabled }) => {
    const handleChange = (event) => {
        const { checked } = event.target;
        onChange(checked);
    };
    return (
        <Container>
            <BooleanFieldStyle
                id={id}
                checked={isChecked}
                onChange={handleChange}
                required={required}
                disabled={disabled}
            />
            <Label>
                {label}
            </Label>
            {/* {required && !isChecked && <RequiredAsterisk>*</RequiredAsterisk>} */}
        </Container>
    );
};

export default BooleanField;
