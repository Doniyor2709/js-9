const price = (products, id) => {
  const product = products.find((product) => product.id === id);
  return product?.name;
};

const products = [
  { id: 1, name: 'Product 1', price: 100, rating: 5, discount: 10 },
  { id: 2, name: 'Product 2', price: 200, rating: 4, discount: 20 },
  { id: 3, name: 'Product 3', price: 300, rating: 3, discount: 30 },
];

const productName = findProductNameById(products, 5);
console.log(productName);