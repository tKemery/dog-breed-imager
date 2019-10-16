function handleSubmit(){
    $('form').submit(event => {
      event.preventDefault();
      let breed = document.getElementById('breed').value;
      getDogPics(breed);
    });
}
  
function getDogPics(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(function(response){
        if (response.status !== 200){
            alert(`Sorry, we don't have any ${breed}s right now.`)
        }
        else{
            return response.json()
        };
    })
    .then(responseJson =>
        displayResults(responseJson));
}
  
function displayResults(responseJson){
    $('img').attr('src', `${responseJson.message}`);
}

$(function(){
  handleSubmit();
  console.log('App Successfully Loaded');
});