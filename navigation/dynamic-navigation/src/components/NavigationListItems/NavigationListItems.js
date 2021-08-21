import React from "react";
import { Link } from "react-router-dom";
// import SubNavigationListItems from "../SubNavigationListItems/SubNavigationListItems";

const NavigationListItems = ({ data }) => {
  console.log("DATA PROP:", data);
  let { subNav } = data;

  console.log(data.url);
  return (
    <Link to={data.url}>
      {data.linkName}
      {/* {subNav.map((item) => (
        <SubNavigationListItems subData={item} />
      ))} */}
    </Link>
  );
};

export default NavigationListItems;
