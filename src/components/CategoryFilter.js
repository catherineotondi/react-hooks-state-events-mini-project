function CategoryFilter(props) {
  const { categories, handleSelectCategory ,selectCategory } = props;
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index) => {
        const className = category === selectCategory ? "selected" : null;
          return( 
            <button 
              key={index}
              className={className}
              onClick={() => handleSelectCategory(category)}>
              {category}
            </button>)
        })}
    </div>
  );
}

export default CategoryFilter;