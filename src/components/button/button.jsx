import './button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttontype, ...options }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`}
      {...options}
    >
      {children}
    </button>
  );
};

export default Button;
