import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

const Product = () => {

    const params = useParams()
    const [getimg, setimg] = useState(false)
    console.log(params.id)
    const [getp, setp] = useState([])
  const [load , setload] = useState(true)


    useEffect(() => {
        const getItems = async()=>{
            const result = await axios.get(`https://dummyjson.com/products/${params.id}`)



            .then(function (res) {
                // handle success
                setimg(true)
                console.log(res.data.products);
                setp(res.data)
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
    
    if (getimg) {
        return (
        <>
                <div className="mt-5 container main">
                    <div className="section-2">
                        <div className="box1 d-flex justify-content-between">
                            <div className="p-main-img">
                                <img src={getp.thumbnail} alt="" />
                            </div>
                            <div className="p-other-con">
                                {/* <h2>product no. : {getp.id}</h2> */}
                                <h1>{getp.title}</h1>
                                <p>{getp.description}</p>
                                <div className='rating'>⭐⭐⭐⭐⭐<i class="bi bi-star"></i></div>
                                <div className="p-span"></div>
                                <div className="d-flex price align-items-center">
                                    <div className='p-dis'>-{getp.discountPercentage}%</div>
                                    <div className='p-icon'><sup><span>&#8377;</span></sup>{getp.price}<sup className="zero">00</sup></div>
                                </div>
                                <div className="p-brand">brand : {getp.brand}</div>
                                <div className="p-stock">instock : {getp.stock}</div>
                                <div className="d-flex">
                                    <div className="p-relative">
                                <div className="p-btn">
                                    <a href="#">buy now</a>
                                </div>
                                </div>
                                <div className="p-btn2">
                                    <a href="#">add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>

                            <div className="mt-100">
          <div className="row container">
          {
            getp.images.map((im)=>
            {
              return(
                <div className="col other-img">
                <img class="image" src={im}></img>
                </div>
                )
              }
              )
            }
            </div>
          </div>
                        </>
                        )
}
}
}
                        export default Product;