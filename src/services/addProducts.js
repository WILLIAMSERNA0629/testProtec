export const addProducts = async ({ title, description, price }) => {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title,
                description,
                price
            }
        )
    })
    const data = await response.json();
    return (data)
}