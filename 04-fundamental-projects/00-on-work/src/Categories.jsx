function Categories({ catList, filterCat }) {
  return (
    <div className="categories">
      {catList.map((category, index) => {
        return (
          <span
            key={index}
            className="category"
            onClick={() => filterCat(category)}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
}

export default Categories;
