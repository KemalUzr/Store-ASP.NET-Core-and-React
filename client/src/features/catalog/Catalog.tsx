import { Button } from "@mui/material";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";

interface Props {
    products: Product[],
    addProducts: () => void;
}

export default function Catalog({products, addProducts} : Props) {
    return (
        <>  
            <ProductList products={products}></ProductList>
            <Button variant='contained' onClick={addProducts}> add products </Button>
        </>
    )
}