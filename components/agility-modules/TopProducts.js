const TopProducts = ({fields}) => {
    const products = fields.products.map(p => {
        return {
            productId: p.fields.productId,
            name: p.fields.name,
            price: p.fields.price,
            image: p.fields.image.url,
        }
    });

    console.log(products);
    
    return (
        <div>
            {products.length} products to show
        </div>
    )
}

export default TopProducts;