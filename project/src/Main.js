import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import Loader from './Loader';
const Main = () => {

  const [char, setchar] = useState([])
  const [load , setload] = useState(true)


  useEffect(() => {
    const getItems = async()=>{
     const result = await axios.get('https://dummyjson.com/products')



      .then(function (res) {
        // handle success
        setchar(res.data.products)
        console.log(res.data.products);
      })



      .catch(function (error) {
        // handle error
        console.log(error);
      })
      setload(false)
  }
  getItems();
  },[]
  );
  if(load)
  {
    return(<Loader/>)
  }
  else{




  return (
    <>
      <div className="mt-5 container main d-flex flex-wrap">


        {
          char.map((i) => {
            return (
              <>
                <div className="section-1">
                  <div className="box">
                    <div className="main-img">
                      <img src={i.thumbnail} alt="" />
                    </div>
                    <div className="other-con">
                      {/* <h2>product no. : {i.id}</h2> */}
                      <h1>{i.title}</h1>
                    <p>{i.description}</p> 
          <div className='rating'>⭐⭐⭐⭐⭐<i class="bi bi-star"></i></div>
          <div className="d-flex price align-items-center">
          <div className='m-icon'><span>&#8377;</span>{i.price}</div>
          <div className='m-dis'>( {i.discountPercentage}% Off )</div>
          </div>
          <div className="p-relative">
          <div className="btn">
            <a href={`product/${i.id}`}>deal of the day</a>
          </div>
          </div>
          {/* <p>brand : {i.brand}</p>
          <p>category : {i.category}</p>
            <p>stock : {i.stock}</p> */}


                      {/* <div className="mt-100">
          <div className="row">
          {
            i.images.map((im)=>
            {
              return(
                <div className="col other-img">
                <marquee behavior="" direction="">
                <img class="image" src={im}></img>
                </marquee>
                </div>
                )
              }
              )
            }
            </div>
          </div> */}
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      {/* </div> */}
      {/* // </div> */}

    </>
  )
      }
}
export default Main;