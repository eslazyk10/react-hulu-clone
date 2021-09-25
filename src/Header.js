import React from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Tranding</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div> 
            </div>
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Hulu-Emblem-700x394.jpg" alt="" />
        </div>
    )
}

export default Header
