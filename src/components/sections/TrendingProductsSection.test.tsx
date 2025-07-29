import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ProductSection } from "./ProductSection";
import { trendingProducts } from "@/data/products";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => (
      <section {...props}>{children}</section>
    ),
  },
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: unknown) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("TrendingProductsSection", () => {
  it("renders trending products section with correct title", () => {
    render(
      <ProductSection
        title="Trending Products"
        subtitle="Popular beauty essentials loved by our customers"
        products={trendingProducts}
      />
    );

    expect(screen.getByText("Trending Products")).toBeInTheDocument();
    expect(
      screen.getByText("Popular beauty essentials loved by our customers")
    ).toBeInTheDocument();
  });

  it("displays all trending products with trending badges", () => {
    render(
      <ProductSection title="Trending Products" products={trendingProducts} />
    );

    // Check that all trending products are rendered
    trendingProducts.forEach((product) => {
      expect(
        screen.getByTestId(`product-card-${product.id}`)
      ).toBeInTheDocument();
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.brand)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });

    // Check that trending badges are displayed
    const trendingBadges = screen.getAllByText("Trending");
    expect(trendingBadges).toHaveLength(trendingProducts.length);
  });

  it("applies different styling for trending badges vs new badges", () => {
    render(
      <ProductSection title="Trending Products" products={trendingProducts} />
    );

    const trendingBadges = screen.getAllByText("Trending");
    trendingBadges.forEach((badge) => {
      expect(badge).toHaveClass("bg-yellow-400", "text-gray-900");
    });
  });

  it("has responsive grid layout for trending products", () => {
    render(
      <ProductSection title="Trending Products" products={trendingProducts} />
    );

    const gridContainer = screen
      .getByTestId("product-section")
      .querySelector(".grid");
    expect(gridContainer).toHaveClass(
      "grid",
      "grid-cols-1",
      "sm:grid-cols-2",
      "lg:grid-cols-3",
      "xl:grid-cols-4",
      "gap-6"
    );
  });

  it("displays correct product information for trending items", () => {
    render(
      <ProductSection title="Trending Products" products={trendingProducts} />
    );

    // Test first trending product
    const firstProduct = trendingProducts[0];
    expect(screen.getByText(firstProduct.name)).toBeInTheDocument();
    expect(screen.getByText(firstProduct.brand)).toBeInTheDocument();
    expect(screen.getByText(firstProduct.price)).toBeInTheDocument();

    // Verify the image alt text includes both name and brand
    const productImage = screen.getByAltText(
      `${firstProduct.name} by ${firstProduct.brand} - Premium beauty product available at Pureluxe Beauty`
    );
    expect(productImage).toBeInTheDocument();
  });
});
