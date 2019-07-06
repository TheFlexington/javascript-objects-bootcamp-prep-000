var playlist = {
  'Slowdive': "Alison",
  'My Bloody Valentine': "sometimes"
};

function updatePlaylist(obj, key, value) {

}

function removeFromPlaylist(obj, key) {
  delete playlist.Slowdive;
  return playlist;
}