using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
       
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet] //api/products/
        public async Task<ActionResult<List<Product>>> GetProducts(string OrderBy, string searchTerm)
        {

            var query = _context.Products.AsQueryable();
            query = OrderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "PriceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };


            //returned query als er niks wordt opgezocht
            if (string.IsNullOrEmpty(searchTerm)) return await query.ToListAsync();

            var lowerCaseSearch = searchTerm.Trim().ToLower();
            return await query.Where(p => p.Name.ToLower().Contains(lowerCaseSearch)).ToListAsync();


            //return await _context.Products.ToListAsync();
        }
        [HttpGet("{id}")] //api/products/3
        public async Task <ActionResult<Product>> GetProduct(int id)
        {   

            return await _context.Products.FindAsync(id);
        }
    }
}