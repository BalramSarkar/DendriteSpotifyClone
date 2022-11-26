import React from 'react'
import "./../css/Sidebar.css";
import SpotifyLogo from "./../images/spotify-logo.jpg";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Sidebar() {
    return (
         <div className="sidebar">
              <div className="sidebar-logo-container">
                   <img
                        className="sidebar-logo"
                        src={SpotifyLogo}
                        alt="Spotify"
                   />
              </div>
              <div className="sidebar-links">
                   <div className="side-bar-links-important">
                        <div className="sidebar-links-top">
                             <SidebarRow
                                  selected
                                  Icon={HomeIcon}
                                  title="Home"
                             />
                             <SidebarRow Icon={SearchIcon} title="Search" />
                             
                        </div>
                        <div className="sidebar-links-bottom">
                             <SidebarRow
                                  Icon={FavoriteIcon}
                                  title="Favourites"
                             />
                             <SidebarRow
                                  Icon={PlayArrowRounded}
                                  title="Playlists"
                             />
                        </div>
                   </div>
                   <div className="sidebar-links-other">
                        <a>Cookies</a>
                        <a>Privacy</a>
                   </div>
              </div>
         </div>
    );
}

export default Sidebar
