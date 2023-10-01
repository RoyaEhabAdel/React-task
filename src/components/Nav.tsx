import React from 'react';
import './Nav.css';
import {HomeOutlined, TeamOutlined, CarryOutOutlined, ShareAltOutlined, FileOutlined, DiffOutlined, HeartOutlined} from '@ant-design/icons';

function Nav(){
    return(
        <>
        <div className='SideBar'>
            <ul>
                <li> <HomeOutlined /> </li>
                <li><TeamOutlined /></li>
                <li><CarryOutOutlined /></li>
                <li><ShareAltOutlined /></li>
                <li><FileOutlined /></li>
                <li><DiffOutlined /></li>
                <li><HeartOutlined /></li>
            </ul>
        </div>
        </>
    )
}

export default Nav;