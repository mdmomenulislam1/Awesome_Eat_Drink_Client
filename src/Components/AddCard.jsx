

const AddCard = () => {
  const handleAddProduct = (e) =>{
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productImage = form.product_image.value;
    const brandName = form.brand_name.value;
    const brandImage = form.brand_image.value;
    const productType = form.product_type.value;
    const productPrice = form.product_price.value;
    const productShortDescription = form.product_short_description.value;
    const productFullDescription = form.product_long_description.value;
    const productRating = form.product_rating.value;
    console.log(productName, productImage, brandName, brandImage, productType, productPrice, productShortDescription, productFullDescription, productRating);
    const productData ={
      productName,
      productImage,
      brandName,
      brandImage,
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
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    });

  }


  return (
    <div className="mx-12 text-center my-5">
      
      <form onSubmit={handleAddProduct} action="" method="post" className="w-full">
      <h2 className="text-2xl font-bold">Add Product </h2>
        <input type="text" name="product_name" id="" placeholder="Product Name" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="product_image" id="" placeholder="Product Image URL" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="brand_name" id="" placeholder="Brand Name" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        <input type="text" name="brand_image" id="" placeholder="Brand Image" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="product_type" id="" placeholder="Product Type" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="product_price" id="" placeholder="Product Price" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="product_short_description" id="" placeholder="Product Short Description" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="product_long_description" id="" placeholder="Product Full Description" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        
        <input type="text" name="product_rating" id="" placeholder="Product Rating" className="m-3 w-1/3 p-3 text-black font-semibold border rounded-lg"/>
        <br />
        <button className="btn m-3 w-full p-3 text-black font-semibold border rounded-lg" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddCard;