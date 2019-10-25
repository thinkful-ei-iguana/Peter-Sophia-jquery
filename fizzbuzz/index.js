$(function() {

$('.number-chooser').submit(event => {
    event.preventDefault();
    let givenNumber = $(event.currentTarget).find('input[number-choice]').val();
    console.log(givenNumber);

    const result = [];
    for (let i = 1; i<=countTo; i++){
  
      const result = [];
    // count from 1 to `countTo`, and for
    // each number, add the number or its
    // substitution (fizz, buzz, fizzbuzz)
    // to the result array.
    for (let i = 1; i <= countTo; i++) {
      if (i % 5 === 0) {
        result.push($(
          '<div class="fizz-buzz-item fizzbuzz"><span>buzz</span></div>'));
      } else if (i % 15 === 0) {
        result.push($(
          '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
      } else if (i % 3 === 0) {
        result.push($(
          '<div class="fizz-buzz-item fizzbuzz"><span>buzz</span></div>'));
      } else {
        result.push($(
          '<div class="fizz-buzz-item fizzbuzz"><span>'+ i +'</span></div>'));
      }
    }
    return $(".js-results").append(result);
  }
  });


});







$(.js-results).append(<div class="fizz-buzz-item"> <span>1</span> </div>);





});