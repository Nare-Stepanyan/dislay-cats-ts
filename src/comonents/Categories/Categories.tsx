import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.thecatapi.com/v1/categories",
    }).then((data) => {
      console.log(data.data);
      setCategories(data.data);
    });
  }, []);

  return <div>{categories.map((el: ICategory) => el.name)}</div>;
};

export default Categories;
