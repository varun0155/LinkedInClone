import React from 'react'
import Feed from '../components/Feed'
import PromotionBar from '../components/PromotionBar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div
      style={{
        backgroundColor:"rgb(248, 248, 248)",
        display : "flex",
        justifyContent : "center",
        paddingTop : "25px"
      }}
    >
      <Sidebar width ={0.17}/>
      <Feed width = {0.4}/>
      <PromotionBar width = {0.2}/>
    </div>
  )
}

export default Home