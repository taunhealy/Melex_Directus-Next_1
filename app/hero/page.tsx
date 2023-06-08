import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepageProducts } from "../queries/queries";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { data: posts, isSuccess } = useQuery(
    "products",
    async () => await getHomepageProducts()
  );

  console.log(posts);

  return (
    <div className="flex flex-col items-center py-2 max-w-2xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess &&
        posts.map((post) => (
          <ProductCard
            title={product.title}
            key={product.id}
            image={product.featured_image.id}
          />
        ))}
    </div>
  );
}
