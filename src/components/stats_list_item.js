import React from 'react';

const StatsListItem = (props) => {
  console.log("HERE'S STATSLIST props: ", props);
  let actualPercentage = "percentage percentage-" + (props.average).toString();
  return (
    <div>
      {props.name}
      <dd className={actualPercentage}>
        <span className="text">
          {(props.average + "%")}
        </span>
      </dd>
    </div>
  );
};

export default StatsListItem;