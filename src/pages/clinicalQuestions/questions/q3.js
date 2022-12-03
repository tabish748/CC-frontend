import React, { useEffect, useState } from 'react';

const Q3 = () => {
  const [isInstitution , setIsInstitution] = useState(false)

  useEffect (()=>{
    console.log("render")
  } ,[isInstitution])
  return (
    <>

   
    </>
  );
}

export default Q3;
