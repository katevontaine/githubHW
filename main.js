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

var lastUpdate = _.pluck(repos, 'updated_at');


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
  +"<hr>"
});
console.log(reposEntry);
$('.reposData').html(reposEntry);

// moment().startOf('hour').fromNow();

////////////////////////////////////////////////////////////////////////////////
//FOR MIDDLE SECTION PUBLIC ACTIVITY TAB
var actTime = _.pluck(events, 'created_at');
console.log(actTime);
$('.actTime').html(actTime);

var actType = _.pluck(events, 'type');
console.log(actType);
$('.actType').html(actType);
// if(actType === "PushEvent") return "pushed to";
// document.querySelector('.pushType').innerHTML += "pushed to";

var actName = _.pluck(events, 'login');
console.log(actName);
$('.actType').html(actName);

var actUrl = _.pluck(events, "repo.url");
console.log(actUrl);
$('.actType').html(actUrl);
//
// var  actName = events.filter(function(el){
//   return _.contains(el.evets, "login")
// });
var reposObj = "";
_.forEach(events, function (item, idx, arr){
  console.log(item);
  reposObj += "<article class='actName'>" + item.actor.login + '</article>'
  reposObj += "<article class='actUrl'>" + item.repo.url + '</article>'
  reposObj += "<article class='actAvatar'>" + item.actor.avatar_url + '</article>'
});

  var publicAct = "";
  _.forEach(events, function (item, idx, arr){
    publicAct += "<article class='publicAct'>"
    + "<h2>"
    + actTime[idx]
    + "'>'"
    +"</h2>"
    + "<p>"
    + actType[idx]
    + "</p>"
    + "<p>"
    + actTime[idx]
    + "</p>"
    + "<p>"
    + actName[idx]
    + "</p>"
    + "<p>"
    + actUrl[idx]
    + "</p>"
    + "<p>"
    + actAvatar[idx]
    + "</p>"
    +"<hr>"
    // += "<article class='actMessage'>"
    // + item.payload.commits[0].message
    // + '</article>'
  });
  console.log(publicAct);
  $('.publicactivity').html(publicAct);

  // reposObj += "<article class='actMessage'>" + item.payload.commits[0].message + '</article>'
  // reposObj += "<article class='entry'>"

document.querySelector(".publicactivity").innerHTML += reposObj;


// var actorR == _.pluck(events, 'actor');
// console.log(CharName);
// var userName = _.pluck(events, 'actor.login');
// console.log(userName);

//
// var reposEntry = "";
// _.forEach(repos, function (item, idx, arr){
//   reposEntry += "<article class='entry'>"
//   + "<h2>"
//   + reposName[idx]
//   // + "'>'"
//   +"</h2>"
//   + "<p>"
//   + lastUpdate[idx]
//   + "</p>"
//   +"<hr>"
// });
// console.log(reposEntry);
// $('.reposData').html(reposEntry);
//























//
