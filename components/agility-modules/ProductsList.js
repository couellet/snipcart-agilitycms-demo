import tw from 'twin.macro';
import Image from 'next/image';

const Container = tw.div`container mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 mb-8`;
const Card = tw.div`my-8`;
const Header = tw.h1`container mt-1 text-2xl font-bold`;
const Title = tw.h2`mt-2 text-xl font-bold`;
const Price = tw.p`text-sm mb-2 text-primary-600 font-bold`;
const Button = tw.button`bg-primary-600 text-white w-full p-2 font-bold mt-2`;

const ProductsList = ({customData}) => {
    const { products } = customData;
    console.log(products);
    return (
        <div>
            <Header>Products list</Header>
            <Container>
                {products.map((product, i) => (
                    <Card key={i}>
                        <Image 
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                        />
                        <Title>{product.name}</Title>
                        <Price>${product.price}</Price>
                        <p>{product.description}</p>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

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