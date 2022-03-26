import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./categories.module.scss";

const Categories = () => {
  const { categories, category_ids } = useTypedSelector((state) => state);
  const { getImages, changeCategory, addCategory } = useActions();
  useEffect(() => {
    addCategory();
  }, []);
  useEffect(() => {
    const params = {
      limit: 10,
      page: 1,
      category_ids,
    };
    getImages(params);
  }, [category_ids]);

  const handleClick = (el: ICategory) => {
    changeCategory(el.id);
  };
  return (
    <div>
      {categories.map((el: ICategory) => {
        return (
          <div className={styles.categoryList} key={el.id}>
            <span
              onClick={() => handleClick(el)}
              className={styles.singleCategory}
            >
              {el.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
