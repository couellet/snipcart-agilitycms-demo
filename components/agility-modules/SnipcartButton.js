import tw from 'twin.macro';

const Button = tw.button`bg-primary-600 text-white w-full p-2 font-bold mt-2`;

const SnipcartButton = ({product}) => {
    return (
        <Button
            className="snipcart-add-item"
            data-item-id={product.productId}
            data-item-url="/"
            data-item-name={product.name}
            data-item-description={product.description}
            data-item-price={product.price}
            data-item-image={product.image}>
            Add to cart
        </Button>
    )
}

export default SnipcartButton;