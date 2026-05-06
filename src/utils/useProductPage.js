import { useState ,useEffect} from "react";



const useProductPage = (id)=>{

    const[product,setProduct]=useState(null);

    useEffect(()=>{

        fetchProduct();

    },[])

    async function  fetchProduct(){

        const data=await fetch ("https://dummyjson.com/products/"+id)
        const json = await data.json();
        setProduct(json);

    }

    return product;

}
export default useProductPage;