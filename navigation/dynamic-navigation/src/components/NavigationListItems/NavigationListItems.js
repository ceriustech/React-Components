import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/NavigationListItems.Styles.scss'; 
// import SubNavigationListItems from "../SubNavigationListItems/SubNavigationListItems";

const NavigationListItems = ({ data }) => {
  console.log("DATA PROP:", data);
  let { subNav } = data;

  console.log(data.url);
  return (
    <Link to={data.url} className="nav-item">
      {data.linkName}
      {/* {subNav.map((item) => (
        <SubNavigationListItems subData={item} />
      ))} */}
    </Link>
  );
};

export default NavigationListItems;
