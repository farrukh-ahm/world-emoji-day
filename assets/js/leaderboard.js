let leaderboardData;


// Load leaderboard from local json file then sort by score
async function leaderboard() {
  // load JSON File
  const response = await fetch("data/leaderboard.json");
  // parse JSON string to an object
  leaderboardData = await response.json();
  console.log(leaderboardData);
  // Sort the array of results from heighest to lowest
  leaderboardData.sort(function (a, b) {
    return b.score - a.score;
  });
  // Now build the table with the buildTable function
  buildTable(leaderboardData);
  
}


// Loop the array of data to create the table for the leaderbaord
function buildTable(leaderboard) {
  var table = document.getElementById('myTable');

  for (var i = 0; i < leaderboard.length; i++) {
    var row = `<tr>
                    <td>${leaderboard[i].name}</td> 
                    <td>${leaderboard[i].difficulty}</td>
                    <td>${leaderboard[i].score}</td> 
              </tr>`
    table.innerHTML += row
  }
}

// Call the functions
leaderboard();
buildTable(leaderboard);