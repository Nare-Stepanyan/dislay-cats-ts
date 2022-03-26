import { useEffect, useState } from "react";
import Image from "./Image";
import styles from "./display.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const MainDisplay = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { images, category_ids } = useTypedSelector((state) => state);
  const { getImages } = useActions();

  useEffect(() => {
    const params = {
      limit: 10,
      page: 1,
    };
    getImages(params);
  }, []);
  useEffect(() => {
    const params = {
      limit,
      page,
      category_ids,
    };
    getImages(params);
  }, [page]);

  const handleClick = () => {
    setLimit(limit + 10);
    setPage(page + 1);
  };
  return (
    <>
      <div className={styles.imageList}>
        {images.map((el) => {
          return <Image key={el.id} url={el.url} />;
        })}
      </div>
      <button className={styles.loadMore} onClick={handleClick}>
        <span>Load More</span>
      </button>
    </>
  );
};

export default MainDisplay;
