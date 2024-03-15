import {useState , useEffect} from 'react'
import { Card,Button} from 'react-bootstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Invoices () {
    const [invoices,setInvoice] = useState([])

    useEffect(()=>{
        (async()=>{
            try{
                const response =await axios.get('http://localhost:3056/api/invoices')
                setInvoice(response.data)
            }catch(err){
                console.log(err)
            }
        })()
    },[])
    
    const makePayment = async(product)=>{
        try{
            const body = {
                invoiceId:product._id,
                productName:product.productName,
                amount:product.amount
            }
            
        const response = await axios.post('http://localhost:3056/api/create-checkout-session',body)
        
        //Store the transaction id in local storage
        localStorage.setItem('stripeId', response.data.id)
        
        //Redirecting the user to the chekout page of stripe
        window.location = response.data.url; 

        }catch(err){
            console.log(err)
        }
    }

    return (
    <div>
        <br/>
        <div  style={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column'
        }}>  
        <h1>Listing Invoices - {invoices.length}</h1>
        {invoices.map(product => (
        <div key={product._id} className="col-md-4 mb-3">
        <Card>
          <Card.Img variant="top" src={product.image} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.amount}</Card.Text>
            <Button variant="primary" onClick={(e)=>{
                makePayment(product)
            }}>
              Pay Now
            </Button>
          </Card.Body>
        </Card>
      </div>
      ))}
      </div>
    </div>)
}