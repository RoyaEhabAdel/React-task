import React from 'react';
import './Bar.css';
import { DownOutlined, FileOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

function Bar(){
    const { Search } = Input;

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
        <div className='side'>
        <div className='header'>
        <h1>London Internship Program</h1>
        <h5>London</h5>
        <Search placeholder="input search loading default" />
        </div>
        <div className='filters'>
            <div className='filtersHead'>
                <h4>Filters</h4>
                <h5>0 selected</h5>
            </div>
            <div>
            <div className='DropDown'>
            <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} href='###'>
                <Space>
                    <div className='drop'>
                    <div>
                <FileOutlined />
                Personal Information
                </div>
                <div>
                <DownOutlined />
                </div>
                </div>
                </Space>
            </a>
            </Dropdown>
            </div>

            <div className='DropDown'>
            <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} href='###'>
                <Space>
                    <div className='drop'>
                    <div>
                <FileOutlined />
                Education
                </div>
                <div>
                <DownOutlined />
                </div>
                </div>
                </Space>
            </a>
            </Dropdown>
            </div>

            <div className='DropDown'>
            <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} href='###'>
                <Space>
                    <div className='drop'>
                    <div>
                <FileOutlined />
                Work Experience
                </div>
                <div>
                <DownOutlined />
                </div>
                </div>
                </Space>
            </a>
            </Dropdown>
            </div>

            <div className='DropDown'>
            <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} href='###'>
                <Space>
                    <div className='drop'>
                    <div>
                <FileOutlined />
                Activity Filter
                </div>
                <div>
                <DownOutlined />
                </div>
                </div>
                </Space>
            </a>
            </Dropdown>
            </div>

            <div className='DropDown'>
            <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} href='###'>
                <Space>
                    <div className='drop'>
                    <div>
                <FileOutlined />
                Advanced Filter
                </div>
                <div>
                <DownOutlined />
                </div>
                </div>
                </Space>
            </a>
            </Dropdown>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Bar;