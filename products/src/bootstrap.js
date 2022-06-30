import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container doesn't have an element with
  // with id 'dev-products'...

  if (el) {
      // we are probably running in isolation
    mount(el);
  }
}


// Context/Situation #2
// We are running this file in developmwnt or production 
// through the conatiner app
// No Guararntee that an element with an id of 'dev-products'
// We do not want try to immediately render the app 

export { mount };
