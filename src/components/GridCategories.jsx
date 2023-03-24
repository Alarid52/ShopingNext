import { Category } from './Category';
import { InfoIndex } from './InfoIndex';

export const GridCategories = ({items, insertItem}) => {
    
    const categoriesGrid = ['men', 'women', 'jewelery', 'electronics'];

    const menItems = items.filter((item)=> item.category === "men's clothing");
    const womenItems = items.filter((item)=> item.category === "women's clothing");
    const jewelItems = items.filter((item)=> item.category === "jewelery");
    const elecItems = items.filter((item)=> item.category === "electronics");

    return (
        <section className="container-items">
            <InfoIndex />
            {categoriesGrid.map((category)=>{
                let cat;   
                switch (category) {
                    case 'men':
                        cat = <Category key={category} category={category} itemsCategory={menItems} insertItem={insertItem}/>
                        break;
                    case 'women':
                        cat = <Category key={category} category={category} itemsCategory={womenItems} insertItem={insertItem}/>
                        break;
                    case 'jewelery':
                        cat = <Category key={category} category={category} itemsCategory={jewelItems} insertItem={insertItem}/>
                        break;
                    case 'electronics':
                        cat = <Category key={category} category={category} itemsCategory={elecItems} insertItem={insertItem}/>
                        break;
                    default:
                        break;
                }
                return cat;
            })}
        </section>
    )
}
