const ProductsList = (props) => {
    return (
        <div>
            <h1>Products list</h1>
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