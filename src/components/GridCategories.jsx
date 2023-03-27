import { Category } from './Category';
import { InfoIndex } from './InfoIndex';

export const GridCategories = ({ items, insertItem }) => {

    const categoriesGrid = ['men', 'women', 'jewelery', 'electronics'];

    const menItems = items.filter((item) => item.category === "men's clothing");
    const womenItems = items.filter((item) => item.category === "women's clothing");
    const jewelItems = items.filter((item) => item.category === "jewelery");
    const elecItems = items.filter((item) => item.category === "electronics");

    return (
        <section className="container-items">
            <InfoIndex />
            {categoriesGrid.map((category) => {
                switch (category) {
                    case 'men':
                        return <Category key={category} category={category} itemsCategory={menItems} insertItem={insertItem} />                       
                    case 'women':
                        return <Category key={category} category={category} itemsCategory={womenItems} insertItem={insertItem} />                        
                    case 'jewelery':
                        return <Category key={category} category={category} itemsCategory={jewelItems} insertItem={insertItem} />        
                    case 'electronics':
                        return <Category key={category} category={category} itemsCategory={elecItems} insertItem={insertItem} />  
                    default:
                        break;
                }
            })}
        </section>
    )
}