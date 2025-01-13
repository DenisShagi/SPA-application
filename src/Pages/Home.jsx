import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    const searchValue = search.includes("=")
      ? search.split("=")[1].toLowerCase()
      : "";
    getAllCategories()
      .then((data) => {
        setCatalog(data.categories);
        setFilteredCatalog(
          searchValue
            ? data.categories.filter((item) =>
                item.strCategory.toLowerCase().includes(searchValue)
              )
            : data.categories
        );
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export { Home };
