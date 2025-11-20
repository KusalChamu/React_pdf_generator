import { useState } from "react";
import AddProduct from "./components/addProduct";
import jsPDF from "jspdf";
import AddProductGrid from "./components/addProductGrid";

function App2(){

    const [product,setProduct] = useState([])

    const addProduct = (a,b,c) =>{
        setProduct([...product,{id:Date.now(),name:a,price:Number(b),quantity:Number(c)}])
    }

    const removeProduct = (id)=>{
        setProduct(product.filter(item => item.id !== id))
    }
    const total = product.reduce(
        (sum, item) => sum + item.price * item.quantity,0
    );
    //callback function to calculate the amount(function inside the function)


    const downloadpdf = () =>{
        const doc = new jsPDF()

        doc.setFontSize(18)
        doc.text("Product name List",10,10)

        doc.setFontSize(12)
        product.forEach((item,index)=>{
            doc.text(`${index + 1}. ${item.name} - Price: ${item.price} - Quantity: ${item.quantity}`, 10, 20 + index * 10);
        })
        doc.save("product_list.pdf")    

    }

    return(
        <div>
            <AddProduct onAdd={addProduct}></AddProduct>
            <AddProductGrid product={product} onRemove={removeProduct}></AddProductGrid>

            <button onClick={downloadpdf} style={{ marginTop: "20px" }}>
                Download PDF
            </button>
            <div style={{ marginTop: "10px", fontWeight: "bold" }}>
            Total: ${total}
            </div>


        </div>
    )
        
    }


export default App2;
