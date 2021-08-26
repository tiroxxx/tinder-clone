import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img className="header-logo" src="./assets/tinder-logo.png" alt="" />
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}
