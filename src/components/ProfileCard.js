import { Avatar } from '@mui/material'
import React from 'react'

 function ProfileCard() {
  return (
    <div
      style={{
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        border: "1px solid grey",
        padding: "25px 0px",
        position : "relative"
      }}
    >
      <div
        style ={{height : "60px", backgroundColor : "rgb(158 175 195)", width : "100%", position : "absolute", top : 0, borderRadius : "10px 10px 0px 0px"}}
      >
        
      </div>
      <Avatar src=''
        style = {{height : "70px", width :"70px", border : "2px solid white"}}
      /> 
      <div
        style={{fontSize:"13px", padding : "20px 10px 10px 10px"}}
      >Software engineer</div>

      <div style={{borderTop : "1px solid lightgrey", width: "100%"}}></div>

      <div
        style={{ fontSize: "12px", padding : "20px 0px 10px"}}
      >Who viewed your profiles : 100
      </div>

      <div
        style={{ fontSize: "12px", paddingBottom: "20px" }}
      >Who viewed your profiles : 100
      </div>

      <div style={{ borderTop: "1px solid lightgrey", width: "100%" }}></div>

      <div
        style={{ fontSize: "12px", paddingTop : "10px" }}
      >Try premium</div>

    </div>
  )
}
export default ProfileCard