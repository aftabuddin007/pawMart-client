import { useNavigate } from 'react-router';
import errImg from '../../assets/error-404.png'

import React from 'react';

const Error = () => {
   const navigate = useNavigate();
  const handleBack = ()=>{
    navigate(-1)
  }



    return (
        <div>
          <title>Error - 404</title>
             <div>
          <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={errImg}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold">Oops, page not found!</h2>
    <p>The page you are looking for is not available.</p>
    <div className="card-actions">
      <button onClick={()=>handleBack()} className="btn btn-primary">Go Back!</button>
    </div>
  </div>
</div>  
        </div>
        </div>
    );
};

export default Error;

