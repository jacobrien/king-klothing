import './button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttontype, isLoading = false, ...options }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`}
      disabled={isLoading}
      {...options}
    >
      {isLoading ? <div className="loading-spinner" /> : children}
    </button>
  );
};

export default Button;
