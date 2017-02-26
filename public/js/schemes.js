var $grid;
var filters = {}
var categories = '.open, .obc, .scst, .bpt, .disability';
var activeCategory = [];
var currentAge;

$( document ).ready(function() {
    setTimeout(initializeGrid, 2000);
});

// Grid functions

function initializeGrid() {
  $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: function() {
      var isMatched = true
      var $this = $(this)

      for (var prop in filters) {
        var filter = filters[prop]
        // test each filter
        if ( filter ) {
          isMatched = isMatched && $(this).is( filter );
        }

        // break if not matched
        if ( !isMatched ) {
          break;
        }
      }
      return isMatched
    }
  });
}

// Listeners

$('#filters').on( 'click', 'input', function() {
  var $this = $(this)

  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');


  switch(filterGroup) {
    case 'gender':
      filters[ filterGroup ] = $this.attr('data-filter')
      break;
    case 'age':
      break;
    case 'category':
      var category = $this.attr('data-filter')
      if (this.checked) {
        activeCategory.push(category)
      } else {
        var index = activeCategory.indexOf(category)
        activeCategory.splice(index, 1)
      }
      filters[ filterGroup ] = activeCategory.join('')
      break;
  }
  $grid.isotope();
})

$("#ageFilter a").click(function() {
  currentAge = parseInt($(this).text())
  filters[ 'age' ] = ageFilter
  $grid.isotope();
});

var ageFilter = function() {
  var ageRange = $(this).attr('data-age')

  var startAge = parseInt(ageRange.substr(0, 2))
  var endAge = parseInt(ageRange.substr(2, 2))
  var isAgeInRange = currentAge >= startAge && currentAge <= endAge
  return isAgeInRange
}
