

$('.thumbnail').on('click', event => {
    event.preventDefault();
    let newSrc = $(event.currentTarget).find('img').attr('src');
    let newAlt = $(event.currentTarget).find('img').attr('alt');

$('.hero img').attr('src', newSrc).attr('alt', newAlt);

});

