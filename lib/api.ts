import { cache } from "react";
import type { Category, Product } from "@/types";

const BASE_URLS = [
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

const REVALIDATE_SECONDS = 600;

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  for (const baseUrl of BASE_URLS) {
    try {
      const res = await fetch(`${baseUrl}${path}`, {
        next: { revalidate: REVALIDATE_SECONDS },
      });

      if (!res.ok) {
        console.warn(`[bazardor] ${baseUrl}${path} -> HTTP ${res.status}`);
        continue;
      }

      return (await res.json()) as T;
    } catch (error) {
      console.warn(`[bazardor] ${baseUrl}${path} -> ${String(error)}`);
    }
  }

  return fallback;
}

export const getAllProducts = cache(async (): Promise<Product[]> => {
  return fetchJson<Product[]>("/products", []);
});

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts();

  return products.find((item) => item.slug === slug) ?? null;
}

export const getProductsByCategory = cache(async (category: string): Promise<Product[]> => {
  return fetchJson<Product[]>(`/products?category=${category}`, []);
});

export const getCategories = cache(async (): Promise<Category[]> => {
  return fetchJson<Category[]>("/categories", []);
});

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();

  return categories.find((item) => item.slug === slug) ?? null;
}
