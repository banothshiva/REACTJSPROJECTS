import React, {useState} from "react";

const AmazonProduct =()=>{
const  [data , setData ]=useState
({
    customerId:"",
    name:"",
    mobileNumber:"",
    productName:"",
    price:"",
    quantity:"",

});

const [result , setResult]= useState
({

     totalAmount:0,
     discountAmount:0,
     gst:0,
     invoiceBill:0

});

const change =(e)=>
{
    setData({...data, [e.target.name]:e.target.value})
}

const display=(e)=>
{
   e.preventDefault();

const totalAmount=price*quantity;
        let gst=totalAmount*0.18;
        let discountAmount=0;
        let invoiceBill=0;
        
        if(totalAmount<2500)
        {
            discountAmount=totalAmount*0.10;
        }
        else if(totalAmount>=2500 && totalAmount<=5000)
        {
            discountAmount=totalAmount*0.15;
        }
        else if(totalAmount>5000)
        {
            discountAmount=totalAmount*0.30;
        }
        
        invoiceBill=totalAmount-discountAmount+gst;
        setResult({total:totalAmount,discount:discountAmount,gst:gst,invoiceBill:invoiceBill});
 }
return(
    <>
    <div>
    <form onSubmit={display}>
        CUSTOMER ID :<input type="text" name="customerId" value={customerId} onChange={change}></input><p></p>
         CUSTOMER NAME:<input type="text" name="name" value={data.name}  onChange={change}></input><p></p>
    MOBILE NUMBER :<input type="text" name="mobileNumber" value={mobileNumber} onChange={change}></input><p></p>
    PRODUCT NAME:<input type="text" name="productName" value={productName} onChange={change}></input><p></p>
    QUANTITY  :<input type="text" name="quantity" value={quantity} onChange={change}></input><p></p>
    PRICE:<input type="text" name="price" value={price} onChange={change}></input><p></p>
    <input type="submit" value="PRINT BILL"></input>
    </form>
    </div>
<div>
<h1>CUSTOMER ID:{customerId}</h1>
<h1>CUSTOMER NAME:{data.name}</h1>
<h1>MOBILE NUMBER : {mobileNumber}</h1>
<h1>PRODUCT NAME:{productName}</h1>
<h1>QUANTITY:{quantity}</h1>
<h1>PRICE:{price}</h1>
<h1>TOTAL AMOUNT:{totalAmount}</h1>
<h1>GST:{gst}</h1>
<h1>DISCOUNT AMOUNT:{discountAmount}</h1>
<h1>INVOICE BILL:{invoiceBill}</h1>
<h1>{result}</h1>
</div>

</>);
}

export default AmazonProduct;