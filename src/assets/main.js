$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/1256656.json',
    dataType: 'jsonp',
    success: function(response) {
      var badges = $('#badges');
      // handle response
      response.courses.completed.forEach(function(course) {
        var courseElem = $('<div></div>').addClass('course');

        courseElem.append($('<h3>' + course.title + '</h3>'));
        courseElem.append($('<img></img>').attr('src', course.badge));
        courseElem.append($('<a>See Course</a>')
          .attr({
            target: '_blank',
            href: course.url})
          .addClass('btn btn-primary'));

        badges.append(courseElem);
      }, this);
    }
  });

});
