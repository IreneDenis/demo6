/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { increment, incrementByAmount } from './Redux/Counter';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function App() {
  const {count }=useSelector((state)=> state.counter);
  // const count=useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
     }}>
      <h1>The count is: {count}</h1>
      <div style={{

       }}>
        <div style={{
       
        color:"black",
        diaplay:"flex",
        height:"20%",
        width:"35%",
      }} >
      <button style={{

        
      }} onClick={()=>dispatch(increment()) }>increment</button>
      </div>
      <div style={{
        
        color:"black",
        diaplay:"flex",
        height:"20%",
        width:"35%",
        marginTop:"5px",
      }}>
      <button style={{

        // backgroundColor:"white",
        // color:"black",
        // diaplay:"flex",
        // height:"20%",
        // width:"35%",

       }}
       onClick={()=>dispatch(increment())} >decrement</button>
      </div>

      </div>
      <div style={{
        display:"flex",
        color:"black",
        height:"20%",
        width:"35%",
      }}><button style={{

        // backgroundColor:"white",
        // color:"black",
        // diaplay:"flex",
        // height:"20%",
        // width:"35%",

       }}
       onClick={()=>dispatch(incrementByAmount(33))} >increment by 33</button>

      </div>
    </div>
  )
}
