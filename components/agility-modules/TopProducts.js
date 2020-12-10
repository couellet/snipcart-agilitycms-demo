import Product from './Product';
import tw from 'twin.macro';

const Container = tw.div`container mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 mb-8`;

const TopProducts = ({fields}) => {
    const products = fields.products.map(p => {
        return {
            productId: p.fields.productId,
            name: p.fields.name,
            price: p.fields.price,
            image: p.fields.image.url,
        }
    });
    
    return (
        <Container>
            {products.map((product, i) => (
                <Product product={product} key={i} />
            ))}
        </Container>
    )
}

export default TopProducts;