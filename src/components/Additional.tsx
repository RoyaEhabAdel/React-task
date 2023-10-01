import React from 'react';
import { PlusOutlined, EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './Additional.css';

function Additional(){
    function Edit(){
        let para = document.getElementById('para');
        para?.focus();
    };
    
    return(
        <>
        <div className='main'>
            <div className='heading'>
                <h1>Additional questions</h1>
            </div>
            <div className='aForm'>
                <form>
                    <div>
                        <h4>Paragraph</h4>
                        <div className='para'>
                        <input type='text' value={'Please tell me about yourself in less than 500 word'} id="para"></input>
                        <div className='edit' onClick={Edit}><EditOutlined /> </div>
                        </div>
                    </div>
                    <div>
                        <h4>Dropdown</h4>
                        <div className='para'>
                        <input type='text' value={'Please select the graduation year from the list below'} id="para"></input>
                        <div className='edit' onClick={Edit}><EditOutlined /> </div>
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
                    <div className='add' id='addQ' >
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
export default Additional;