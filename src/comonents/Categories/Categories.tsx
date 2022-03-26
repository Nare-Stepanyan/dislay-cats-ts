import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./categories.module.scss";

const Categories = () => {
  const { categories } = useTypedSelector((state) => state);
  const { addCategory } = useActions();
  const { getImages } = useActions();
  useEffect(() => {
    addCategory();
  }, []);
  const handleClick = (el: ICategory) => {
    const params = {
      limit: 10,
      page: 1,
      category_ids: el.id,
    };
    getImages(params);
  };
  return (
    <div>
      {categories.map((el: ICategory) => {
        return (
          <div className={styles.categoryList} key={el.id}>
            <span onClick={() => handleClick} className={styles.singleCategory}>
              {el.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
