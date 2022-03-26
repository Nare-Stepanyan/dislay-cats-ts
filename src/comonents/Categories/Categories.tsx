import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./categories.module.scss";

const Categories = () => {
  const { categories } = useTypedSelector((state) => state);
  const { addCategory } = useActions();
  useEffect(() => {
    addCategory();
  }, []);

  return (
    <div>
      {categories.map((el: ICategory) => {
        return (
          <div className={styles.categoryList} key={el.id}>
            <span
              onClick={() => console.log(el.id)}
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
