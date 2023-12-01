import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/products";
interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: "secondary.main"}}>
                            {product.name.charAt(0).toUpperCase()}
                        </Avatar>
                        }
                    title={product.name}
                />
                <CardMedia
                    sx={{ height: 140, backgroundSize: 'contain'}}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color="secondary" variant="h5">
                        ${(product.price/100).toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Buy</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </>
    )
}