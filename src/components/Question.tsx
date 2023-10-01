import React from 'react';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './Question.css';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

function Question(){


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Paragraph
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Short answer
      </a>
    ),
    
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Yes/No
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Dropdown
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Multiple choice
      </a>
    ),
  },
  {
    key: '6',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Date
      </a>
    ),
  },
  {
    key: '7',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Number
      </a>
    ),
  },
  {
    key: '8',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        File upload
      </a>
    ),
  },
  {
    key: '9',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="###">
        Video question
      </a>
    ),
  },

];



    
    return(
        <>
        <div className='aQuestion' id='ques'>
            <div className='heading'>
                <h1>Additional questions</h1>
            </div>
            <div className='aForm'>
                <form>
                    
                    <div>
                        <h4>Type</h4>
                        <div className='para'>
                        <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()} href='###'>
                            <Space>
                            <DownOutlined />
                          </Space>
                         </a>
                         </Dropdown>
                        </div>
                    </div>
                    <div>
                        <h3>Question</h3>
                        <input type='text' id='question'></input>
                    </div>
                    <div>
                        <h5>Choice</h5>
                        <div id='list'>
                            <div><UnorderedListOutlined /></div>
                            <input type='Type here'></input>
                            <div id='addValue'><PlusOutlined /></div>
                        </div>
                    </div>
                    <div className='add'>
                        <PlusOutlined />
                        <h3>add question</h3>
                    </div>
                    <div className='formFooter'>
                        <div>
                        <h2>X</h2>
                        <h6>Delete question</h6>
                        </div>
                        <div>
                            <button>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Question;