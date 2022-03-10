import { Home as HomeIcon, Chat as ChatIcon, Notifications, Work, LinkedIn as LinkedInIcon, Podcasts, Menu, Search } from '@mui/icons-material';
import { Avatar, Input } from '@mui/material';
import React from 'react';
function Navbar(){
  return(
    <div className='navbar'
      style={{
        display:"flex",
        justifyContent:"space-around",
      }}
    >
      <div className='left-icons'
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <LinkedInIcon className='icon'/> 
        <div className='search'
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search className='icon'/>
          <input placeholder='Search'/>
        </div>
      </div>
      <div className='right-icons'
        style={{
          display: "flex",
          alignItems:"center",
          justifyContent:"space-between",
          width:"50vw"
        }}
      >
        <div style={{display: "flex", flexDirection:"column",alignItems:"center"}}>
          <HomeIcon className='icon'/>
          <div style={{fontSize: "12px"}}>Home</div>  
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Podcasts className='icon' />
          <div style={{ fontSize: "12px" }}>Network</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ChatIcon className='icon' />
          <div style={{ fontSize: "12px" }}>Message</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Work className='icon' />
          <div style={{ fontSize: "12px" }}>Job</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Notifications className='icon' />
          <div style={{ fontSize: "12px" }}>Notifications</div>
        </div>

        {/* add image of yours from local storage */}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar src=''/> 
          <div style={{ fontSize: "12px" }}>Me</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Menu className='icon' /> 
          <div style={{ fontSize: "12px" }}>Work</div>
        </div>
        <span>Try Premium for free</span>
      </div>
    </div>
    
  )
}

export default Navbar