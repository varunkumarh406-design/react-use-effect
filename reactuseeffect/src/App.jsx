 import React,{ useState, useEffect } from 'react';
function App(){
 const [winsize,setWinsize] = useState({width:window.innerWidth,height:window.innerHeight});
  useEffect(()=>{
    const handleResize = () => {
      
        setWinsize({width:window.innerWidth,height:window.innerHeight});
      }
      window.addEventListener('resize',handleResize);
      return () => {
        window.removeEventListener('resize',handleResize);
        }
      },[]);
  return(
    <div style={{
      display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw',
      fontSize:'2rem',fontWeight:'bold',
      color:'white',backgroundColor:'black'
    }}>
    <h1>Window Size: {winsize.width} x {winsize.height} </h1>
    </div>
  )
}
export default App;