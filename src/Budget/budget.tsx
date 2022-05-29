import { CategoryItem, getCategories, getCategory } from "../Data/data";

type CategoryProps = {
  id: number,
}
export function Category(props: CategoryProps) {
  let category = getCategory(props.id);
  if (category) {
    return <div key={category.id}><h1>{category.name}</h1></div>
  } else {
    return <div><h1>Not Found</h1></div>
  }
}

export default function Budget() {
  let categories = getCategories();
  let categoriesList = categories.map((category: CategoryItem) => <Category  id={category.id} />);    
  
  return (
    <div className='content'>
      <h1>Budget</h1>
      { categoriesList } 
    </div>
  )
}