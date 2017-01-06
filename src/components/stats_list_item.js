import React from 'react';

const StatsListItem = (props) => {
  console.log("HERE'S STATSLIST props: ", props);
  let actualPercentage = "percentage percentage-" + (props.average).toString();
  return (
    <dl>
      <dd>{props.name}</dd>
      <dd className={actualPercentage}>
        <span className="text">
          {(props.average + "%")}
        </span>
      </dd>
    </dl>
  );
};

export default StatsListItem;