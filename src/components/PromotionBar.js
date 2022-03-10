import React from 'react'

function PromotionBar({width}) {
  return (
    <div
      style={{
        borderRadius: "10px",
        border: "1px solid grey",
        padding: "10px",
        flex : width
      }}
    >
      <div style={{ fontSize: "15px", marginBottom: "8px" }}> Recent </div>

      <div className='recent-activity'
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <div>
          Why Referral for Job Seekers
        </div>
        <div>
          hello hashtagteamwork
        </div>
        <div>
          GeeksforGeeks
        </div>
        <div>
          hashtagindia
        </div>
        <div>
          # hashtaghr
        </div>
      </div>
    </div>
  )
}

export default PromotionBar