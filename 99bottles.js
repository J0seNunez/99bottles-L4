let bottleCounter=99;
let lyricsArr=[];

//Not validated for bottleCounter under 3 or not integer.
 do{
    if (bottleCounter > 2){
         lyricsArr.push(" ");
         lyricsArr.push(bottleCounter + " bottles of beer on the wall, " + bottleCounter + " bottles of beer.");
         bottleCounter--;
         lyricsArr.push("Take one down and pass it around, " + bottleCounter + " bottles of beer on the wall.");
    }   else if (bottleCounter > 1){
         lyricsArr.push(" ");
         lyricsArr.push(bottleCounter + " bottles of beer on the wall, " + bottleCounter + " bottles of beer.");
         bottleCounter--;
         lyricsArr.push("Take one down and pass it around, " + bottleCounter + " bottle of beer on the wall.");
    }   else if (bottleCounter > 0){
         lyricsArr.push(" ");
         lyricsArr.push(bottleCounter + " bottle of beer on the wall, " + bottleCounter + " bottle of beer.");
         bottleCounter--;
         lyricsArr.push("Take one down and pass it around, no more bottles of beer on the wall.");
         lyricsArr.push(" ");
         lyricsArr.push("No more bottles of beer on the wall, no more bottles of beer.");
         lyricsArr.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }   else {
        lyricsArr.push("Need more bottles");
    }
} while (bottleCounter > 0);

let lyricsDisplay = lyricsArr.join("<br/>");

$(document).ready(function($) {
    $("h1").html('Lyrics of the song 99 Bottles of Beer on the Wall');
    $("h2").html(lyricsDisplay);
});