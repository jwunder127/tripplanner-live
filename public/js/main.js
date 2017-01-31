//repeated variables

const itineraryPrefix = '<div class="itinerary-item"><span class="title">';

const removeButton = '<button id="remove-hotel" class="btn btn-xs btn-danger remove remove-task btn-circle">x</button>';

const dayButton = '<button class="btn btn-circle day-btn">';

const dayTitlePrefix = '<span id="day-title"><span>Day ';
const dayTitleSuffix = '</span><button id="remove-day" class="btn btn-xs btn-danger remove btn-circle">x</button></span>';

let numDays = 3;
let tripPlan = [];


$(document).ready(function() {

  //select option menu
  $(hotels).each(function(idx, hotel){
    $('#hotel-choices').append('<option>' + hotel.name + '</option>');
    });

  $(restaurants).each(function(idx, restaurant){
    $('#restaurant-choices').append('<option>' + restaurant.name + '</option>');
    });

  $(activities).each(function(idx, activity){
    $('#activity-choices').append('<option>' + activity.name + '</option>');
    });

//add and remove hotels, restaurants, activities
  $('#add-hotel').click(function() {
    const $selectedHotel = $('#hotel-choices').val();

    $('#hotel-itinerary').append(itineraryPrefix + $selectedHotel + '</span> '
      + removeButton + '</div>');


    $('.remove-task').click(function(){
      $(this).closest('div').remove();
      console.log(this);
    });
  });

  $('#add-restaurant').click(function() {
    const $selectedRestaurant = $('#restaurant-choices').val();

    $('#restaurant-itinerary').append(itineraryPrefix + $selectedRestaurant + '</span> '
      + removeButton + '</div>');

    $('.remove-task').click(function(){
      $(this).closest('div').remove();
      console.log(this);
    });
  });

  $('#add-activity').click(function() {
    const $selectedActivity = $('#activity-choices').val();

    $('#activity-itinerary').append(
      itineraryPrefix + $selectedActivity + '</span> '
      + removeButton + '</div>');

    $('.remove-task').click(function(){
      $(this).closest('div').remove();
      console.log(this);
    });
  });

//add or remove day
  $('#add-btn').click(function() {
    $(this).before(dayButton + (numDays + 1) + '</button>');
    tripPlan.push({
      hotel: [],
      activity: [],
      restaurant: []
    });
    numDays++;
    // select current day
    //TODO make this work for days 2 and 3 (before adding days)
    $('.day-btn').not($('#add-btn')).click(function() {

      $('.day-btn').removeClass('current-day');
      $(this).addClass('current-day');
      //select id day title, remove children, add new children with current day info
      $('#day-title').remove();
      $('#day-title-container').append(dayTitlePrefix + $(this).html() + dayTitleSuffix);
      console.log(this);


    });
  });


});

//
