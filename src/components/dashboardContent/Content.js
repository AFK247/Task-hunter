import React from 'react';

const Content = () => {
    return (
        <div className="content container m-4">
   <div className="container">
      <div className="row">
         <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
               <div className="card-body">
                  <h5 className="animated fadeInUp">Total new</h5>
                  <h6 className="text-secondary animated fadeInUp">0</h6>
               </div>
            </div>
         </div>
         <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
               <div className="card-body">
                  <h5 className="animated fadeInUp">Total canceled</h5>
                  <h6 className="text-secondary animated fadeInUp">0</h6>
               </div>
            </div>
         </div>
         <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
               <div className="card-body">
                  <h5 className="animated fadeInUp">Total pending</h5>
                  <h6 className="text-secondary animated fadeInUp">0</h6>
               </div>
            </div>
         </div>
         <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
               <div className="card-body">
                  <h5 className="animated fadeInUp">Total complate</h5>
                  <h6 className="text-secondary animated fadeInUp">0</h6>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    );
};

export default Content;