import { FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'priceDesc':
        return b.price - a.price;
      case 'price':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <Paper sx={{ mb: 2 }}>
          <TextField
            label='Search'
            variant='outlined'
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort</FormLabel>
            <RadioGroup value={sortOption} onChange={handleSortChange}>
              <FormControlLabel value="name" control={<Radio />} label="name" />
              <FormControlLabel value="priceDesc" control={<Radio />} label="PriceDesc" />
              <FormControlLabel value="price" control={<Radio />} label="PriceAsce" />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <ProductList products={sortedProducts} />
      </Grid>
    </Grid>
  )
}
