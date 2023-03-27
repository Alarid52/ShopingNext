export const getItems = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const items = await response.json();
        
        return items;
    } catch (error) {
        console.log("Error al conectar API");
        return error;
    }
}