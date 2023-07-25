import './Header.css';

const Header = ({artist, profile, listeners}) => {
  return (
    <header>
        <button id="back"><i className="fa-solid fa-chevron-left"></i></button>
        <img src={profile} className="header__profile" alt="Profile Artist." />
        <div className="artistData">
            <h2 className='header__artist'>{artist}</h2>
            <h3 className='header__listen'>{listeners} monthly listeners</h3>
        </div>
    </header>
  )
}

export default Header;