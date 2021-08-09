import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, MenuItem} from 'react-pro-sidebar';
import {FaAngleUp} from 'react-icons/fa';
import {FaChild} from 'react-icons/fa';
import {FaThList} from 'react-icons/fa';
import {FaAlignCenter} from 'react-icons/fa';
import '../css/Navigation.css'

const Navigation = () => {

    return (
        <Menu>
            <MenuItem icon={<FaAngleUp/>}>
            Root
                <Link exact path to="/"/>
            </MenuItem>

            <MenuItem icon={<FaChild/>}>
            Characters
                <Link to="/characters"/>
            </MenuItem>

            <MenuItem icon={<FaThList/>}>
            Episodes
                <Link to="/episodes"/>
            </MenuItem>

            <MenuItem icon={<FaAlignCenter/>}>
            Quotes
                <Link to="/quotes"/>
            </MenuItem>
        </Menu>
    );
}

export default Navigation;