const getProducts = (minPrice = 0, maxPrice = 0) => {
  //hit the api endpoint using query if doesn't get price default value is zero
  fetch(
    `https://api.ecommerce.com/products?minPrice=${minPrice}&maxPrice=${maxPrice}`,
  )
    .then((res) => res.json())
    .then((data) => {
      if (data instanceof Array) {
        //checking the response if data is array
        getResult(data);
      } else if (Object.getPrototypeOf(data).constructor === Object) {
        //checking exact object type
        const createArray = [{ ...data }]; //spread the objects value and key
        getResult(createArray);
      }
    });
};
getProducts(500, 900);//min and max price assign

// get the final result using this function
const getResult = (data) => {
  //expected an array of data
  const total = data.length;
  const products = data.length > 1000 ? data.slice(0, 1000) : data; //checking data length for max products limitation
  const object = {
    total,
    products,
    count: products.length,
  };
  console.log(object);
  return object; //create an object and return it
};
