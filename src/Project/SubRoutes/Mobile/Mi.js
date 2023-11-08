
import React, { useContext } from 'react'
import { Store1 } from '../../ContextAPI'
import { NavLink } from 'react-router-dom'
import '../../Styles/Mobile.css'
import Footer from '../../Footer/Footer'
const Mi = () => {
  const[ContextData]=useContext(Store1);
  console.log(ContextData);
//   const randomIndex = Math.floor((Math.random() * 10)+1);
//   console.log(randomIndex)
  // const randomItem = ContextData[randomIndex];
  return (
    <div className='mobileContainer'>
      <div style={{display:'flex',flexDirection:'column',width:"280px"}}>
      <div className='left'>
      <ul>
                  <li style={{color:'coral', fontSize:'25px',fontWeight:'600',textDecoration:'underline', listStyle:'none'}}>Mobiles</li>
              <li><NavLink to="/store/subMi" className='sublist' >Mi</NavLink></li>
              <li><NavLink to="/store/subVivo" className='sublist'>Vivo</NavLink></li>
              <li><NavLink to="/store/subSamsung" className='sublist'>Samsung</NavLink></li>
              <li><NavLink to="/store/subRealme" className='sublist'>Realme</NavLink></li>
              <li><NavLink to="/store/subPoco" className='sublist'>Poco</NavLink></li>
              </ul>
      </div>
      <div className='left1'>
         <img src='https://media4.giphy.com/media/26n79t82lmj989iAE/200w.webp?cid=ecf05e47wb1z6j4xx3r58ug787kv0xq495tok7b5q0ixctpp&ep=v1_gifs_search&rid=200w.webp&ct=g' alt='' style={{height:'500px',width:'220px',marginLeft:'20px',marginTop:'20px'}}/>
      </div>
      </div>

    <div className='bestSellerContainer bestSellerContainer1'>
    <p className='bestSeller'>MOBILES-MI</p>
    <hr className='bestSellerHr1'></hr>
<div className='cards1'>
<div className='box1'>
{ContextData.filter((item)=> item && item.id === 1).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 2).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 3).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 4).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 5).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 6).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 7).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <button className='bestSellerButton'>BUY NOW</button>
           </div>)
        })} 
        
  </div>
</div>
</div>
<Footer/>
</div>
  )
}

export default Mi