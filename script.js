const shapes = $('.shapes');
const bodyEl = $('body');
let isShapeClicked = false;

shapes.on('click', function(e) {
  var shape = $(e.target); // Get the target element of the click event
  var shapeClass = shape.attr('class');
  console.log(shapeClass);
  shapes.remove(); // Remove the shape after clicking

  // Set the background image of the original span element
  switch (shapeClass) {
    case 'heart':
      $('span').addClass('heart-style');
      break;
    case 'star':
      $('span').addClass('star-style');
      break;
    case 'grape':
      $('span').addClass('grape-style');
      break;
  }

  isShapeClicked = true;

  // Stop the trail after 3 seconds
  setTimeout(() => {
    isShapeClicked = false;
  }, 3000);
});

bodyEl.on('mousemove', function(e) {
  if (isShapeClicked) {
    const x = e.clientX;
    const y = e.clientY;

    const spanEl = $("<span></span>");
    spanEl.css('left', x + 'px');
    spanEl.css('top', y + 'px');
    spanEl.css('position', "absolute");
    const size = Math.random() * 100;
    spanEl.css('width', size + 'px');
    spanEl.css('height', size + 'px');
    spanEl.css('background', $('span').css('background')); // Use the same background image as the original span element

    bodyEl.append(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  }
});