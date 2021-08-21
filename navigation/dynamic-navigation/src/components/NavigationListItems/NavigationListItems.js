import React from "react";
import SubNavigationListItems from "../SubNavigationListItems/SubNavigationListItems";

const NavigationListItems = ({ data }) => {
  console.log("DATA PROP:", data);
  let { subNav } = data;

  console.log(subNav);
  return (
    <div>
      {data.linkName}
      {subNav.map((item) => (
        <SubNavigationListItems subData={item} />
      ))}
    </div>
  );
};

export default NavigationListItems;
