import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import ProductCard from "./ProductCard";
import TrustBar from "./TrustBar";
import { fetchStoreProducts, getCategoryFilters } from "../utils/productApi";

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function sortProducts(list, sortBy) {
  const sorted = [...list];
  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted.sort((a, b) => b.rating * b.stock - a.rating * a.stock);
  }
}

const Body = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [loading, setLoading] = useState(true);
  const categories = getCategoryFilters();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const products = await fetchStoreProducts();
    setOriginalList(products);
    setListOfProducts(products);
    setLoading(false);
  }

  function applyFilters({ search = searchText, category = activeCategory, sort = sortBy } = {}) {
    let result = [...originalList];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.categoryLabel?.toLowerCase().includes(q)
      );
    }

    setListOfProducts(sortProducts(result, sort));
  }

  function handleSearch() {
    applyFilters({ search: searchText });
  }

  function handleCategoryChange(slug) {
    setActiveCategory(slug);
    applyFilters({ category: slug });
  }

  function handleSortChange(value) {
    setSortBy(value);
    applyFilters({ sort: value });
  }

  function handleReset() {
    setSearchText("");
    setActiveCategory("all");
    setSortBy("featured");
    setListOfProducts(sortProducts(originalList, "featured"));
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="pb-page">
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="pb-container py-10 sm:py-14 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand-600 dark:text-brand-400 font-semibold text-sm uppercase tracking-wider mb-3">
                India's trusted online grocery
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Fresh groceries delivered to your door
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
                Quality staples, personal care, and home essentials — curated and rated by real shoppers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#shop" className="pb-btn-primary">
                  Shop now
                </a>
                <a href="/about" className="pb-btn-secondary">
                  Learn more
                </a>
              </div>
            </div>
            <div className="hidden sm:grid grid-cols-2 gap-3">
              {originalList.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="pb-card p-4 flex flex-col items-center text-center"
                >
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="h-24 w-full object-contain mb-3"
                  />
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-1">
                    {p.title}
                  </p>
                  <p className="text-brand-600 font-bold mt-1">${p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section id="shop" className="pb-container py-8 sm:py-10">
        <div className="pb-card p-4 sm:p-5 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-xl">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="pb-input pl-10"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search groceries, brands, categories..."
              />
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="text-sm px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 outline-none focus:border-brand-500"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <button className="pb-btn-primary text-sm" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="pb-section-title">Shop catalog</h2>
            <p className="pb-section-subtitle">
              {listOfProducts.length} quality-checked products
            </p>
          </div>
          {(searchText || activeCategory !== "all") && (
            <button
              onClick={handleReset}
              className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {listOfProducts.length === 0 ? (
          <div className="pb-card p-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-4">
              No products match your filters.
            </p>
            <button className="pb-btn-primary" onClick={handleReset}>
              View all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {listOfProducts.map((product) => (
              <ProductCard key={product.id} prodData={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Body;
