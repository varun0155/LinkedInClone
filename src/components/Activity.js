import { padding } from '@mui/system'
import React from 'react'

function Activity() {
  return (
    <div
    style={{
        borderRadius: "10px",
        border: "1px solid grey",
        padding : "20px",
        backgroundColor : "white"
    }}
    >
      <div style={{fontSize:"15px", marginBottom : "8px"}}> Recent </div>

      <div className='recent-activity'
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <div>
          # Referral for Job Seekers
        </div>
        <div>
          # hashtagteamwork
        </div>
        <div>
          # GeeksforGeeks
        </div>
        <div>
          # hashtagindia
        </div>
        <div>
          # hashtaghr
        </div>        
      </div>
    </div>
  )
}

export default Activity