export const filterItem = (list, filters) => {
  let filteredList = [...list];
  const { categoryFilter, dateFilter, orderFilter, searchFilter } = filters;
  if (categoryFilter !== 'All') {
    filteredList = filteredList.filter((val) => {
      return val.category.includes(categoryFilter);
    });
  }
  if (dateFilter === 'Ascending') {
    filteredList.sort((a, b) => {
      if (Date.parse(a.created) > Date.parse(b.created)) {
        return 1;
      }
      if (Date.parse(a.created) < Date.parse(b.created)) {
        return -1;
      }
      return 0;
    });
  } else if (dateFilter === 'Descending') {
    filteredList.sort((a, b) => {
      if (Date.parse(a.created) > Date.parse(b.created)) {
        return -1;
      }
      if (Date.parse(a.created) < Date.parse(b.created)) {
        return 1;
      }
      return 0;
    });
  }
  if (orderFilter === 'Ascending') {
    filteredList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
  } else if (orderFilter === 'Descending') {
    filteredList.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }
  if (searchFilter) {
    filteredList = filteredList.filter((val) => {
      return val.name.includes(searchFilter);
    });
  }
  console.log(filteredList, dateFilter);
  return filteredList;
};
