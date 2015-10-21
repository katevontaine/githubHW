//sidebar
// .name
var name = user.name;
document.querySelector('.name').innerHTML += name;

var login = user.login;
document.querySelector('.login').innerHTML += login;

////////////////////////////////////////////////////////////////////////////////
// var date = moment(date).format('MMM DD, YYYY');
// document.querySelector('.date').innerHTML += date;

var follower = user.followers;
document.querySelector('.followers').innerHTML += follower;

var starred = user.starred;
document.querySelector('.starred').innerHTML += starred;

var following = user.following;
document.querySelector('.following').innerHTML += following;

////////////////////////////////////////////////////////////////////////////////
//repository

var reposName = _.pluck(repos, 'name');
// return reposName;
var lastUpdate = _.pluck(repos, 'updated_at');
// return lastUpdate;

var reposEntry = "";
_.forEach(repos, function (item, idx, arr){
  reposEntry += "<article class='entry'>"
  + "<h2>"
  + reposName[idx]
  // + "'>'"
  +"</h2>"
  + "<p>"
  + lastUpdate[idx]
  + "</p>"
});
console.log(reposEntry);
$('.reposData').html(reposEntry);




























//
