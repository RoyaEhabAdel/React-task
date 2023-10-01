import React from 'react';
import { Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Upload.css';
import './Personal.css';

function Personal(){
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      };
    return(
        <>
        <div className='main'>
            <div className='heading'>
                <h1>Personal Information</h1>
            </div>
            <div className='pForm'>
                <form>
                    <div className='pFirst'>
                        <input type='text' placeholder='First Name'></input>
                        <input type='text' placeholder='Last Name'></input>
                        <input type='email' placeholder='Email'></input>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='Nationality' className='pMain'></input>
                        <input type='checkbox'></input>
                        <label>internal</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='Current Residence' className='pMain'></input>
                        <input type='checkbox'></input>
                        <label>internal</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='ID Number' className='pMain'></input>
                        <input type='checkbox'></input>
                        <label>internal</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='Date of Birth' className='pMain'></input>
                        <input type='checkbox'></input>
                        <label>internal</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
                    </div>
                    <div className='pLast'>
                        <input type='text' placeholder='Gender' className='pMain'></input>
                        <input type='checkbox'></input>
                        <label>internal</label>
                        <Switch defaultChecked onChange={onChange} />
                        <label>Hide</label>
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
export default Personal;