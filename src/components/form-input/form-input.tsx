import { InputHTMLAttributes, FC } from 'react';
import './form-input.scss';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label = '', ...options }) => {
  return (
    <div className="group">
      <input className="form-input" {...options} />
      {label && (
        <label className={`${options?.value ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
