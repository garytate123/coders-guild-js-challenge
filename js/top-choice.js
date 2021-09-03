let topSongs = ["Teardrop by Massive Attack", "Three Little Birds by Bob Marley", "Talk Tonight by Oasis", "Talk Show Host by Radiohead", "Silence by Dave Thomas Junior",]
let i, x;
function topChoice(){
    for (i = 0, x = 1; i < topSongs.length; i++, x++) {
        alert("My #" + x + " song is: " + topSongs[i]);        
    }
}