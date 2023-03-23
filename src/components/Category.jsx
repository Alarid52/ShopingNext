import { Card } from './Card'

export const Category = ({category, itemsCategory}) => {
    return (
        <div className="items" id={category}>
            <div className="category">
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            </div>
            <div className='cards'>
                {itemsCategory.map((item)=>{
                    return (<Card key={item.id} product={item}/>)
                })}
            </div>
        </div>
    )
}
