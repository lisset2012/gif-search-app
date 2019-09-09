// READ the giphy API docs: https://developers.giphy.com/
//declare variables and select elements
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'eKHyAfvVTsC8hdBF48dPyVdYSYfWB9yd'

var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector('input')//example of how to grab an information in a very specific way
var results = document.querySelector('.results')

//define functions
function getGifs(path,term){
    // console.log(term)
    $.ajax({
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,//link to ask information
        type: "GET",
        dataType: "json",
        success: (data) => {
            console.log(data)
            for(var i=0; i<data.data.length; i++){
                results.innerHTML +=`
                <img class="image" src="${data.data[i].images.preview_gif.url}">`
            }
        },
        error: (error) => {
            console.log("There was an error")
        }
    })
}

//call functions and/or add event listeners
searchForm.addEventListener('submit',function(event){
    event.preventDefault();
    results.innerHTML = '';
    getGifs("search", searchInput.value);
})




