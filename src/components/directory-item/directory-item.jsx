import { useNavigate } from 'react-router-dom';
import './directory-item.scss';

const getH2Style = (title) => {
  switch (title) {
    case 'mens':
      return 'large';
    case 'womens':
      return 'large';
    default:
      return '';
  }
};

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  // const icon = getIcon(title);
  const h2Style = getH2Style(title);

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={`body ${h2Style}`}>
        <h2>{title.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default DirectoryItem;
