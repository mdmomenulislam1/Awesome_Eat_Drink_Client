import React, { useEffect, useState } from 'react';

const MyCart = () => {


  const [order, setOrder] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isShow, setIsShow] = useState(false)



  useEffect(()=>{
    const orderedItem = JSON.parse(localStorage.getItem('Added'))

    if (orderedItem) {
      setOrder(orderedItem);

      const total = orderedItem.reduce((previousValue, currentPrice) => previousValue + currentPrice.productPrice, 0);
      setTotalPrice(total);
    }
    else{
      setNoFound("No Ordered Item ")
    }
  }, []);

  const handleRemove = () =>{
    localStorage.clear();
    setOrder([]);
    setNoFound("No Ordered")
  }


  return (
    <div>
      <h2 className="text-2xl font-bold">MyCart Page</h2>
      <div>
        <div>


          <div className="overflow-x-auto px-5 w-full text-2xl font-bold py-5">




            {
              isShow ? order?.map((service) => (
                <DashboardCard key={service.id} service={service}></DashboardCard>
              ))

                : order.slice(0, 10).map((service) => (
                  <DashboardCard key={service.id} service={service}></DashboardCard>
                ))
            }
          </div>

          {noFound ? (
            <p className="h-[80vh] flex justify-center items-center text-3xl font-bold">{noFound}</p>
          ) : (
            <div>
              {order.length > 0 && (
                <div className="flex justify-between m-10">
                  <button
                    onClick={handleRemove}
                    className="px-5 rounded-lg text-2xl text-white font-bold outline-2 bg-blue-950"
                  >
                    Deleted All order
                  </button>

                  <h1 className="outline-2 bg-green-950 text-white rounded-2xl p-3 text-3xl font-bold text-center">Total price : {totalPrice}</h1>
                </div>
              )}
              {order.length > 10 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
                {isShow ? "See less" : "See more"}
              </button>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;