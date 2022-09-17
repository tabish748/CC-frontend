import React from 'react';
function ContentImageSection(props) {
    const {heading1, heading2, img, buttonText, textUnderHeading} =props.obj
    return (
        <div className="welcome-row-wrapper mt-5">
           <div className="row">
             <div className="col-lg-5">
               <div className="welcomeCol-wrapper">
                 <h1 className="text-center site-heading">
                   {heading1.headingForCCCLine1 } { heading2 &&<><br/> {heading2.headingForCCCLine2}</> }
                 </h1>
                 {textUnderHeading && <p class="patient-txt">{textUnderHeading}</p>}
                 <p className="mt-4 mb-5">
                   Choosing the right disease process for your asset is
                   imperative. Several drugs have performed suboptimally because
                   they weren't studied in the ideal disease. As opposed to all
                   of our competitors, we have broad expertise in all of
                   hematology and medical oncology, uniquely enabling us to best
                   identify where to position your asset. Our consultants all
                   have MD and MBA degrees, and have conducted clinical trials in
                   numerous hematologic and oncologist disorders. Our CEO has an
                   MD, PhD, and MBA, and has participated in nearly 100 clinical
                   trials. He has three papers in the NEJM and two in Lancet.
                 </p>
 
                 <button className="gray-button welcome-btn">{buttonText}</button>
               </div>
             </div>
             <div className="col-lg-7">
               <div className="welcome-img-video-wrapper">
                 <img src={img.intro} alt="" srcset="" />
               </div>
               
             </div>
             
           </div>
           
         </div>
    );
}

export default ContentImageSection;
