
// make a function named megaFriend;
function megaFriend(allFriends) {
    var largestFriend = "";     // take an empty string
    for (var i = 0; i < allFriends.length; i++) {
      if (largestFriend.length < allFriends[i].length) {
        largestFriend = allFriends[i];
      }
    }
    return largestFriend;
}
//checking my code
var largest_Friends_name = megaFriend(["Mahin","Shohan","Riduan","Mahenur Islam"]);
console.log(largest_Friends_name);