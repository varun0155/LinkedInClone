import React, { useEffect, useState } from 'react';

function Feed({width}) {
  
  const [feedList, setFeedList] = useState([]);
  const [feedsPerPage, setFeedPerPage] = useState(10);
  const [currPage, setCurrPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.join())
    .then(body=>{
      console.log(body);
      setFeedList(body);

      let totalPage = (body.length) / feedsPerPage; // the value can be a float 
      totalPage = Math.ceil(totalPage);

      setTotalPage(totalPage);
    })
 }, []);

  const updateCurrentPage = (pageNo) => { 
    pageNo = parseInt(pageNo);
    setCurrPage(pageNo);
  }

  const onClickNext = () => {
    if (currPage < totalPage){
      setCurrPage(currPage+1);
    }
  }

  return (
    <div className ='feeds'
      style={{
        margin: "20px",
        overflowY : "auto",
        height : "90vh",
        flex : "width"
      }}
    >
      {feedList.map((feed, index) =>
        
        index <= currPage*feedsPerPage && index > (currPage-1) * feedsPerPage ? (
          <div key={index}
            style={{margin : "10px", border : "1px solid lightgrey"}}
          >
            <b style = {{padding : "20px 0px "}} > {index} : {feed.title}</b>
            <br/>
            {feed.body}
            {feed.body}
            {feed.body}
            {feed.body}
            {feed.body}

          </div>
        ) : ''
      )}
      <div>
        <button onClick={(e) => {updateCurrentPage(e.target.innerText)}}>1</button>
        <button onClick={(e) => { updateCurrentPage(e.target.innerText) }}>2</button>
        <button onClick={e => onClickNext()}>Next</button>
      </div>
    </div>
  )
}

export default Feed