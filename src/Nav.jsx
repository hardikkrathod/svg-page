import './Nav.css';
import { useState } from 'react';
import { Menu } from 'antd';
function Nav() {
    const items = [
       
        {
          label: 'Flow',
          key: 'SubMenu',
          children: [
            {
              label: 'Item 1',
            },
            {
             
              label: 'Item 2',
             
            },
          ],
        },
    
      ];
   
    return (
      <>
   <header className='header'>
    <div className='header-box'>
    <div className='header-logo'>
        <span className='logo-text'>Uploder</span>
    </div>
    <div className='left-menu'>
        <div className='menu'>
    <span className='menu-text'>Home</span>
        <span className='menu-text'>Workflow</span>
        <Menu  mode="horizontal" items={items} />
        <span className='menu-text'>Audit</span>
        </div>
        <span className='person-name'>Hi, Hardik!</span>
    </div>
    
    </div>
   </header>
      </>
    );
  }
  


export default Nav;