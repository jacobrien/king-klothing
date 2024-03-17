import './button.scss';

const BTN_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...options }) => {
  return (
    <button
      className={`button-container ${BTN_TYPE_CLASSES[buttonType]}`}
      {...options}
    >
      {children}
    </button>
  );
};

export default Button;
