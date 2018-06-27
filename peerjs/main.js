var peerId = 'safiullin-io-peer-timer'
var options = {host: 'peerjs-timer.herokuapp.com', secure: true, port: 443, key: 'peerjs', debug: 3}
var conn, peer

var promise = new Promise((resolve, reject) => {
  peer = new Peer(peerId, options)
  peer.on('error', function () {
    reject()
  })
})

promise.catch(() => {
  peer = new Peer(options)

  startClient()
})

function startClient () {
  conn = peer.connect(peerId)
  peer.on('connection', function (conn) {
    conn.on('data', function (data) {
      // Will print 'hi!'
      var $div = $('<div />').text(data)
      $('#list').append($div)
      console.log(data)
    })
  })

  conn.on('open', function () {
    // here you have conn.id
    conn.send('hi! connected')
  })
}

// on open will be launch when you successfully connect to PeerServer

$(document).ready(function () {

  $('#send').click(function (e) {
    e.preventDefault()
    conn.on('open', function () {
      // here you have conn.id
      conn.send('hi!')
    })
  })
})
