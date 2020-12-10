import Image from 'next/image';
import tw from 'twin.macro';

const Card = tw.div`my-8`;
const Title = tw.h2`mt-2 text-xl font-bold`;
const Price = tw.p`text-sm mb-2 text-primary-600 font-bold`;

const Product = ({product}) => {
    return (
        <Card>
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
    )
}

export default Product;