import tw from 'twin.macro';
import Product from './Product';

const Container = tw.div`container mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 mb-8`;
const Header = tw.h1`container mt-1 text-2xl font-bold`;

const ProductsList = ({customData}) => {
    const { products } = customData;

    return (
        <div>
            <Header>Products list</Header>
            <Container>
                {products.map((product, i) => (
                    <Product product={product} key={i} />
                ))}
            </Container>
        </div>
    )
}

ProductsList.getCustomInitialProps = async ({
    agility,
    languageCode}) => {
    const rawProducts = await agility.getContentList({
        referenceName: 'products',
        languageCode,
    });

    return {
        products: rawProducts.map(x => {
            return {
                productId: x.fields.productId,
                name: x.fields.name,
                image: x.fields.image.url,
                price: x.fields.price,
                description: x.fields.description
            }
        })
    };
}

export default ProductsList;