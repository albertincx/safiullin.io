var peerId = 'safiullin-io-peer-timer';
var peer = new Peer(peerId, {secure: true});

var conn = peer.connect(peerId);
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});

$(document).ready(function () {

  $('#send').click(function (e) {
    e.preventDefault()
    conn.on('open', function(){
      // here you have conn.id
      conn.send('hi!');
    });
  })
})

peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hi!'
    $div = $('<div />').text(data);
    $('#list').append(div)
    console.log(data);
  });
});