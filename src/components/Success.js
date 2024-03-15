import {useEffect} from 'react'
import axios from 'axios'
import imageSrc from '../images/success.jpg';

export default function Success(){
    useEffect(()=>{
        (async()=>{
            try{
                const stripeId = localStorage.getItem('stripeId')
                const payment = await axios.put(`http://localhost:3056/api/payments/${stripeId}/success`,{paymentStatus:"Successful"})
            }catch(err){
                console.log(err)
            }
        })()
    },[])
    return (
        <div>
        <img src={imageSrc} alt={imageSrc} width="700" height="620" style={{marginLeft:"310px"}} />    
        </div>
    )
}




