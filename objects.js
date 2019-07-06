var playlist = {
  'Slowdive': "Alison",
  'My Bloody Valentine': "sometimes"
};

function updatePlaylist(obj, key, value) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
}

function removeFromPlaylist(obj, key) {
  delete playlist.Slowdive;
}