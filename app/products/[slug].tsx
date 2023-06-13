import { Directus } from '@directus/sdk';

export default function Products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>Product: {product.name}</h1>
          {/* Render other product details */}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const directus = new Directus('https://your-directus-instance-url.com');
  const response = await directus.items('products').read();
  
  return {
    props: {
      products: response.data,
    },
  };
}
