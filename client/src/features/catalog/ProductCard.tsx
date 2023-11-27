import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/products";
interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <><h1>ProductCard</h1><ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl}></Avatar>
            </ListItemAvatar>
            <ListItemText>
                {product.name}- ${product.price}
            </ListItemText>
        </ListItem></>
    )
}