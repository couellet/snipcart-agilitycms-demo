const ProductsList = (props) => {
    return (
        <h1>Products list</h1>
    )
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
                name: x.fields.name
            }
        })
    };
}

export default ProductsList;