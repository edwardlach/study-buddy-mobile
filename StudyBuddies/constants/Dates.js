export const months = () => {
  return [
      {
        days: 31,
        value: 0,
        display: 'January'
      },
      {
        days: 28,
        value: 1,
        display: 'February'
      },
      {
        days: 31,
        value: 2,
        display: 'March'
      },
      {
        days: 30,
        value: 3,
        display: 'April'
      },
      {
        days: 31,
        value: 4,
        display: 'May'
      },
      {
        days: 30,
        value: 5,
        display: 'June'
      },
      {
        days: 31,
        value: 6,
        display: 'July'
      },
      {
        days: 31,
        value: 7,
        display: 'August'
      },
      {
        days: 30,
        value: 8,
        display: 'September'
      },
      {
        days: 31,
        value: 9,
        display: 'October'
      },
      {
        days: 30,
        value: 10,
        display: 'November'
      },
      {
        days: 31,
        value: 11,
        display: 'December'
      }
  ]
};

export function days(daysInMonth) {
  var values = [];
  for(day = 1; day <= daysInMonth; day++) {
    values.push(day);
  }
  return values;
};

export function years() {
  var values = [];
  var date = new Date();
  var currentYear = date.getFullYear();
  for(year = currentYear; year <= currentYear + 9; year++) {
    values.push(year);
  }
  return values;
}
