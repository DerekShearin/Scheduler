// var rightNow = 
// if rightNow < timeSlot = future (green)
// if rightNow > timeSlot = past (white)
// if rightNow == timeslot = present (red)

// const rightNow = new Date(); {
//   console.log(rightNow); 
// }
var rightNow = moment();
// var timeSlot = cccc;
var startTime = document.InputEvent = ()

var displayTime = function(){
  document.getElementById("rightNow").innerText = rightNow.format("MMMM Do, YYYY - hh:mm a");
}
displayTime();

if (rightNow < timeSlot) {
  document.getElementById
}
else if (rightNow > timeSlot) {
  document.getElementById("rightNow").innerText = rightNow.format("MMMM Do, YYYY - hh:mm a");
}
// else (rightNow == timeSlot) {
//   document.getElementById("rightNow").innerText = rightNow.format("MMMM Do, YYYY - hh:mm a");
// };

{/* <form>
        <div class="formBox">
            <label for="title">Movie</label>
            <input type="text" id="title" placeholder="Title"/>
        </div>
        <div class="formBox">
            <label for="yr">Year</label>
            <input type="number" id="yr" placeholder="Year"/>
        </div>
        <div class="formBox">
            <button id="btn">Click to Add</button>
        </div>
        <div id="msg">
            <pre></pre>
        </div>
    </form> */}
    <script>
        let movies = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('startTime').value,
                year: document.getElementById('inputTask').value
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {movies} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(movies) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });
    </script>