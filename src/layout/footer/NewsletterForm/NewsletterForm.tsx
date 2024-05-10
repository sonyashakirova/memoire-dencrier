import './NewsletterForm.style.css';

export const NewsletterForm = () => {
  return (
    <form className='newsletter-form'>
      <h2 className='newsletter-form__title'>
        Abonnez-vous à notre infolettre
      </h2>
      <div className='newsletter-form__email'>
        <label></label>
        <input className='newsletter-form__input' placeholder='Courriel*' />
        <button type='submit' className='newsletter-form__submit-button'>
          Soumettre
        </button>
      </div>
    </form>
  );
};
