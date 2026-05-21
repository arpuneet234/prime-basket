const CATEGORY_CONFIG = [
  { slug: "groceries", label: "Groceries" },
  { slug: "skincare", label: "Personal Care" },
  { slug: "home-decoration", label: "Home Essentials" },
];

function normalizeProduct(product) {
  return {
    ...product,
    brand: product.brand || "Prime Basket",
    categoryLabel:
      CATEGORY_CONFIG.find((c) => c.slug === product.category)?.label ||
      product.category?.replace(/-/g, " ") ||
      "General",
  };
}

function isQualityProduct(product) {
  return (
    product?.thumbnail &&
    product?.title &&
    product.rating >= 4 &&
    product.stock > 0 &&
    product.price > 0 &&
    product.price < 500
  );
}

export async function fetchStoreProducts() {
  try {
    const responses = await Promise.all(
      CATEGORY_CONFIG.map(({ slug }) =>
        fetch(`https://dummyjson.com/products/category/${slug}?limit=30`).then((res) =>
          res.json()
        )
      )
    );

    const merged = responses
      .flatMap((data) => data.products || [])
      .map(normalizeProduct)
      .filter(isQualityProduct);

    const unique = Array.from(new Map(merged.map((p) => [p.id, p])).values());

    return unique.sort((a, b) => b.rating - a.rating);
  } catch {
    return getFallbackProducts();
  }
}

export function getCategoryFilters() {
  return [{ slug: "all", label: "All" }, ...CATEGORY_CONFIG];
}

function getFallbackProducts() {
  return [
    {
      id: 9001,
      title: "Organic Gala Apples (1 kg)",
      description: "Crisp, farm-fresh apples — perfect for snacking and salads.",
      category: "groceries",
      categoryLabel: "Groceries",
      brand: "Prime Basket",
      price: 2.49,
      discountPercentage: 10,
      rating: 4.8,
      stock: 120,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
      images: ["https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"],
      reviews: [],
    },
    {
      id: 9002,
      title: "Fresh Whole Milk (1 L)",
      description: "Rich, creamy milk sourced from trusted local dairies.",
      category: "groceries",
      categoryLabel: "Groceries",
      brand: "Prime Basket",
      price: 3.29,
      discountPercentage: 5,
      rating: 4.7,
      stock: 85,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
      images: ["https://cdn.dummyjson.com/product-images/groceries/milk/1.webp"],
      reviews: [],
    },
  ].map(normalizeProduct);
}

export { CATEGORY_CONFIG };
