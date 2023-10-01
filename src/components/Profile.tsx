import React from 'react';
import { Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Profile.css';

function Profile(){
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      };
    return(
        <>
        <div className='main'>
            <div className='heading'>
                <h1>Profile</h1>
            </div>
            <div className='Form'>
                <form>
                <div className='pLast'>
                        <input type='text' placeholder='Education' className='pMain'></input>
                        <div>
                        <input type='checkbox'></input>
                        <label>Mandatory</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                        </div>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='Experience' className='pMain'></input>
                        <div>
                        <input type='checkbox'></input>
                        <label>Mandatory</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                        </div>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='Resume' className='pMain'></input>
                        <div>
                        <input type='checkbox'></input>
                        <label>Mandatory</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                        </div>
                    </div>
                    <div className='add'>
                        <PlusOutlined />
                        <h3>add question</h3>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Profile;