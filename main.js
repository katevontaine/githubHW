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
