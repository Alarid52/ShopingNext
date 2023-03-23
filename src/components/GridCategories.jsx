import { Category } from './Category';
import { InfoIndex } from './InfoIndex';

export const GridCategories = ({items}) => {
    
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
                        cat = <Category key={category} category={category} itemsCategory={menItems}/>
                        break;
                    case 'women':
                        cat = <Category key={category} category={category} itemsCategory={womenItems}/>
                        break;
                    case 'jewelery':
                        cat = <Category key={category} category={category} itemsCategory={jewelItems}/>
                        break;
                    case 'electronics':
                        cat = <Category key={category} category={category} itemsCategory={elecItems}/>
                        break;
                    default:
                        break;
                }
                return cat;
            })}
        </section>
    )
}
