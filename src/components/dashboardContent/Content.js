import React, { useEffect, useState } from "react";
import { useSummaryQuery } from "../../RTK/CRUD/content";
import Spinner from "../Spinner";

const Content = () => {
  const { data, isLoading, isError, error } = useSummaryQuery();
  console.log(data, isLoading, isError, error);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (!isLoading && isError) {
    content = (
      <div>
        <h3>{error.data.message}</h3>
      </div>
    );
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <div>No data found!</div>;
  } else if (!isLoading && !isError && data?.length > 0) {
    content = (
      <div className="row">
        {data?.map((task) => {
          return (
            <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="animated fadeInUp">{task?._id}</h5>
                  <h6 className="text-secondary animated fadeInUp">
                    {task?.count}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="content container m-4">
      <div className="container">{content}</div>
    </div>
  );
};

export default Content;
