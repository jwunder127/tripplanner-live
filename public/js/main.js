//repeated variables

const itineraryPrefix = '<div class="itinerary-item"><span class="title">';

const removeButton = '<button id="remove-hotel" class="btn btn-xs btn-danger remove remove-task btn-circle">x</button>';

const dayButton = '<button class="btn btn-circle day-btn not-add-btn">';

const dayTitlePrefix = '<span id="day-title"><span>Day ';
const dayTitleSuffix = '</span><button id="remove-day" class="btn btn-xs btn-danger remove btn-circle">x</button></span>';

//numDays and tripPlan reflect 3 days by default
let numDays = 3;
let tripPlan = [{
      hotel: [],
      activity: [],
      restaurant: []
    }, {
      hotel: [],
      activity: [],
      restaurant: []
    }, {
      hotel: [],
      activity: [],
      restaurant: []
    }];


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
    //we want to add the hotel to the tripPlan as well.
    const $selectedDay = $('.current-day').html();
    tripPlan[$selectedDay - 1].hotel.push($selectedHotel);

  });
  //event delegation
  $('#hotel-itinerary').on('click', '.remove-task', function(){
    //update selectedHotel to be the one associated with the clicked button
     const $selectedHotel = $(this).prev().html();
     const $selectedDay = $('.current-day').html();
    $(this).closest('div').remove();

    //when we remove the div we also want to remove that
    //hotel from the array.
    let hotelIndex = tripPlan[$selectedDay - 1].hotel.indexOf($selectedHotel);

    //remove hotel from array
    tripPlan[$selectedDay - 1].hotel.splice(hotelIndex, 1);
  });

  $('#add-restaurant').click(function() {
    const $selectedRestaurant = $('#restaurant-choices').val();

    $('#restaurant-itinerary').append(itineraryPrefix + $selectedRestaurant + '</span> '
      + removeButton + '</div>');

    $('.remove-task').click(function(){
      $(this).closest('div').remove();

    });
  });

  $('#add-activity').click(function() {
    const $selectedActivity = $('#activity-choices').val();

    $('#activity-itinerary').append(
      itineraryPrefix + $selectedActivity + '</span> '
      + removeButton + '</div>');


    $('.remove-task').click(function(){
      $(this).closest('div').remove();

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
  });

// select current day
  $('.day-buttons').on('click', '.not-add-btn', function() {

    $('.day-btn').removeClass('current-day');
    $(this).addClass('current-day');
    //select id day title, remove children, add new children with current day info
    $('#day-title').remove();
    $('#day-title-container').append(dayTitlePrefix + $(this).html() + dayTitleSuffix);
    console.log(this);


  });


});

//
