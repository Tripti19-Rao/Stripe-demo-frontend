import {useEffect} from 'react'
import axios from 'axios'
import imageSrc from '../images/cancel.jpg';

export default function Cancel(){
        useEffect(()=>{
            (async()=>{
                try{
                    const stripeId = localStorage.getItem('stripeId')
                    const payment = await axios.put(`http://localhost:3056/api/payments/${stripeId}/failed`,{paymentStatus:"Failed"})
                }catch(err){
                    console.log(err)
                }
            })()
        },[])
    return (
        <div>
        <img src={imageSrc} alt={imageSrc} width="900" height="615" style={{marginLeft:"215px"}} />    
        </div>
    )
}