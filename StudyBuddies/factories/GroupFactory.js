/**
  Article explaining factcory design pattern in javascript
  https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd

  More useful information on JS Factories here:
  https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
**/

const Group = ({
  groupName,
  classId,
  startDate,
  endDate
} = {}) => ({
  groupName,
  classId,
  startDate,
  endDate
});

export default Group;
