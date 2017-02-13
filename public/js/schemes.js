var $grid;
var categories = '.open, .obc, .scst, .bpt, .disability';
var activeCategory = [];
var currentAge;

initializeGrid()
arrangeGrid()


// Grid functions

function initializeGrid() {
  $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
}

function arrangeGrid(filterCondition) {
  $grid.isotope({ filter: filterCondition });
}


// Listeners

$("#category-selector :checkbox").change(function() {
  var categorySelector = this.value

  if (this.checked) {
    activeCategory.push(categorySelector)
  } else {
    var index = activeCategory.indexOf(categorySelector)
    activeCategory.splice(index, 1)
  }

  arrangeGrid(activeCategory.join(''))
})

$("#age-selector a").click(function() {
  currentAge = parseInt($(this).text())
  arrangeGrid(ageFilter)
});

var ageFilter = function() {
  var ageRange = $(this).attr('data-age')
  var startAge = parseInt(ageRange.substr(0, 2))
  var endAge = parseInt(ageRange.substr(2, 2))

  var isAgeInRange = currentAge >= startAge && currentAge <= endAge
  return isAgeInRange
}
