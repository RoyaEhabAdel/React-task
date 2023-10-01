import React from 'react';
import './Content.css';

function Content(){
    return(
        <>
        <div className='content'>
            <div className='contentHead'>
                <div className='first'>
                    <input type='checkbox'></input>
                    <h4>247 Candidates</h4>
                </div>
                <div>
                    <ul>
                        <li><h4>Qualified</h4></li>
                        <li><h5>Task</h5><span>39</span></li>
                        <li><h5>Disqualified</h5><span>74</span></li>
                    </ul>
                </div>
            </div>

            <div className='contentBody'>
                <ul>
                    <li className='all'>
                        <input type='checkbox'></input>
                        <div><h3>AS</h3></div>
                        <ul>
                            <li className='name'>Aaliyah Sanderson</li>
                            <li>Saudi Arabia</li>
                            <li className='btns'><button>item 1</button> <button>item 2</button></li>
                        </ul>
                    </li>
                    <li className='all'>
                        <input type='checkbox'></input>
                        <div><h3>AS</h3></div>
                        <ul>
                            <li className='name'>Aaliyah Sanderson</li>
                            <li>Saudi Arabia</li>
                            <li className='btns'><button>item 1</button> <button>item 2</button></li>
                        </ul>
                    </li>
                    <li className='all'>
                        <input type='checkbox'></input>
                        <div><h3>AS</h3></div>
                        <ul>
                            <li className='name'>Aaliyah Sanderson</li>
                            <li>Saudi Arabia</li>
                            <li className='btns'><button>item 1</button> <button>item 2</button></li>
                        </ul>
                    </li>
                    <li className='all'>
                        <input type='checkbox'></input>
                        <div><h3>AS</h3></div>
                        <ul>
                            <li className='name'>Aaliyah Sanderson</li>
                            <li>Saudi Arabia</li>
                            <li className='btns'><button>item 1</button> <button>item 2</button></li>
                        </ul>
                    </li>
                    <li className='all'>
                        <input type='checkbox'></input>
                        <div><h3>AS</h3></div>
                        <ul>
                            <li className='name'>Aaliyah Sanderson</li>
                            <li>Saudi Arabia</li>
                            <li className='btns'><button>item 1</button> <button>item 2</button></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
        </>
    )
}

export default Content;