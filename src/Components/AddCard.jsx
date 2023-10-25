

const AddCard = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productImage = form.product_image.value;
    const brandName = form.brand_name.value;
    const productType = form.product_type.value;
    const productPrice = form.product_price.value;
    const productShortDescription = form.product_short_description.value;
    const productFullDescription = form.product_long_description.value;
    const productRating = form.product_rating.value;
    console.log(productName, productImage, brandName, productType, productPrice, productShortDescription, productFullDescription, productRating);
    const productData = {
      productName,
      productImage,
      brandName,
      productType,
      productPrice,
      productShortDescription,
      productFullDescription,
      productRating
    }
    fetch('http://localhost:5000/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Okay, Done!", "Product added successfully!", "success");
        }
      });

  }


  return (
    <div className="mx-12 text-center my-5">

      <form onSubmit={handleAddProduct} action="" method="post" className="w-full">
        <h2 className="text-2xl font-bold">Add Product </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center w-full">
          <p className="text-black font-bold">Product Name</p>
        
          <input type="text" name="product_name" id="" placeholder="Product Name" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
        </div>
        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Product Photo URL</p>
          <input type="text" name="product_image" id="" placeholder="Product Image URL" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Brand Name</p>
        <select name="brand_name" id="" placeholder="Brand Name" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg">
          <option value="">Select One</option>
          <option value="Coca-Cola">Coca-Cola</option>
          <option value="McDonald's">McDonald's</option>
          <option value="Starbucks">Starbucks</option>
          <option value="PepsiCo">PepsiCo</option>
          <option value="Nestlé">Nestlé</option>
          <option value="Kellogg's">Kellogg's</option>
        </select>
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Product Type</p>
        <select name="product_type" id="" placeholder="Product Type" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg">
          <option value="">Select One</option>
          <option value="Soft Drink">Soft Drink</option>
          <option value="Burger">Burger</option>
          <option value="Coffee">Coffee</option>
          <option value="Snack">Snack</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Dessert">Dessert</option>
          <option value="Tea">Tea</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cookies">Cookies</option>
          <option value="Chicken">Chicken</option>
          <option value="Juice">Juice</option>
          <option value="Ice Cream">Ice Cream</option>
        </select>
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Product Price</p>
        <input type="text" name="product_price" id="" placeholder="Product Price" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Product Short Description</p>
        <input type="text" name="product_short_description" id="" placeholder="Product Short Description" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Product Full Description</p>
        <input type="text" name="product_long_description" id="" placeholder="Product Full Description" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-black font-bold">Product Rating</p>
        <input type="number" min="1" max="5" name="product_rating" id="" placeholder="Product Rating" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
        </div>
        <br />
        </div>
        <button className="btn bg-purple-900 m-3 w-3/4 p-3 text-white font-bold border rounded-lg" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddCard;