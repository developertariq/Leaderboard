function sortList(list) {
  const listItems = list.querySelectorAll('li');
  const listItemsArray = Array.from(listItems);

  listItemsArray.sort((a, b) => {
    const scoreA = parseInt(a.dataset.score, 10);
    const scoreB = parseInt(b.dataset.score, 10);
    return scoreB - scoreA;
  });

  list.innerHTML = '';

  listItemsArray.forEach((item) => {
    list.appendChild(item);
  });
}

module.exports = sortList;