import type { Category, Product } from "@/types";

const BASE_URL = "https://api.abcz.workers.dev/api/bazardor";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("পণ্যের তথ্য আনা যায়নি");
  }
  return res.json();
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts();
  const product = products.find((item) => item.slug === slug);
  return product ?? null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products?category=${category}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("পণ্যের তথ্য আনা যায়নি");
  }
  return res.json();
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("ক্যাটাগরির তথ্য আনা যায়নি");
  }
  return res.json();
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const res = await fetch(`${BASE_URL}/categories/${slug}`, { cache: "no-store" });
  if (!res.ok) {
    return null;
  }
  return res.json();
}