/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';


const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700">
              Let’s talk about Lone Wolves Digital. 
             </h1>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img row justify-content-center">
              <Image src="/img/slid/marvin-meyer-SYTO3xs06fU-unsplash.jpg" alt=""
                  width={1000}
                  height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;