import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styled from 'styled-components';

export interface PhoneNumberProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?(value: string): void;
    disabled: boolean;
}

const PhoneNumberField = styled.div`
.field-wrapper {
  position: relative;
}
`;

const PhoneInputWrapper = styled(PhoneInput)`
  width: 100%;
  padding: 0.5rem;
  margin-top:10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #00bfff;
  }
`;

const PhoneNumber: React.FC<PhoneNumberProps> = ({
    label,
    value,
    onChange,
    className,
    ...props
}: PhoneNumberProps) => {
    const handleOnChange = (phoneNumber: string) => {
        onChange?.(phoneNumber);
    };

    let htmlFor;
    if (label) {
        htmlFor = label.replace(/\s+/g, '_').toLowerCase();
    }

    return (
        <PhoneNumberField className="field-wrapper">
            <PhoneInputWrapper
                {...props}
                id={htmlFor}
                name={htmlFor}
                value={value}
                onChange={handleOnChange}
                placeholder="Enter phone number"
            />
        </PhoneNumberField>
    );
};

PhoneNumber.defaultProps = {
    onChange: () => { },
};

export default PhoneNumber;