var socket = io();

// Returns a random historical figure from the list of figures.
function chooseUser(){
    return window.names[Math.floor(Math.random() * window.names.length)]
}

var username = chooseUser();


socket.on('connect', function(){
    socket.emit('add user', username);
    $('#you').append($('<li>').text(username));
});

socket.on('update users', function(data){
    $('#users').empty();
    $.each(data, function(key, value){
        $('#users').append($('<li>').text(key));
    });
});

$('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('chat message', function(username, msg){
    $('#messages').append($('<li>').html("<strong>" + username + "</strong>" + ": " + msg));
    $('.scroll').scrollTop(1000000);
});

socket.on('send bio', function(bio, link){
    $('#bio').html(bio + "... " + "<a href=" + link + ">Read More on Wikipedia" + "</a>");
});


