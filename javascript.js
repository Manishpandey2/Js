const URL = "https://fakestoreapi.com/products/1";
const URL_1 = "https://fakestoreapi.com/products";

async function rangee() {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);

    return 0;
  } catch (error) {
    console.log(error);
  }
}

const products = {
  title: "caliber",
  price: 3000,
  description: "badiya",
  image: "https://themeisle.com/blog/image-link/",
};

async function publishProduct() {
  try {
    const publish = await fetch(URL_1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });

    const result = await publish.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// rangee();
publishProduct();
