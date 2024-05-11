import { FormEvent, useRef } from 'react';
import { ArrowLink } from '../ArrowLink';
import './EmailForm.style.css';

interface Props {
  size: 'sm' | 'lg';
  label: string;
  onSubmit: (email: string) => void;
  color?: string;
}

export const EmailForm = ({ size, label, onSubmit, color }: Props) => {
  const email = useRef('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email.current);
  };

  return (
    <form
      className={`email-form ${size}`}
      onSubmit={handleSubmit}
      style={{ color }}
    >
      <label className='email-form__label' htmlFor='email-input'>
        {label}
      </label>
      <div className='email-form__input-line'>
        <div className='email-form__input-container'>
          <input
            className='email-form__input'
            id='email-input'
            type='email'
            name='email'
            placeholder='Courriel*'
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
        </div>
        <ArrowLink as='button' type='submit'>
          Soumettre
        </ArrowLink>
      </div>
    </form>
  );
};
