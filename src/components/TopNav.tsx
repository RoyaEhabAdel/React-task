import React from 'react';
import './TopNav.css';
import { DownOutlined, BookOutlined, UserAddOutlined, UserOutlined, UserSwitchOutlined, MessageOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

function TopNav(){

    const items: MenuProps['items'] = [
        {
          label: <a href="###">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="###">2nd menu item</a>,
          key: '1',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ];

    return(
        <>
        <div className='top'>
            <div className='dropdown'>
            <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} href='###'>
                <Space>
                    <div className='drop'>
                        <div>
                        Browsing Opportunities
                        </div>
                        <div>
                        <DownOutlined />
                        </div>
                    </div>
                </Space>
            </a>
            </Dropdown>
            </div>

            <div className='btns'>
                <div className='btnsIcons'>
                <div><BookOutlined /></div>
                <div><UserAddOutlined /></div>
                <div><UserOutlined /></div>
                <div><UserSwitchOutlined /></div>
                <div><MessageOutlined /></div>
                </div>
                <div className="last">
                <Dropdown menu={{ items }} trigger= {['click']}>
            <a onClick={(e) => e.preventDefault()} href='###' >
                <Space>
                    <div className='drop'>
                        <div>
                        Move to video interview
                        </div>
                        <div className='lastIcon'>
                        <DownOutlined />
                        </div>
                    </div>
                </Space>
            </a>
            </Dropdown>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopNav;