var friendsData = require("./../data/friends.js")


module.exports = function(app) {

    // Displays all reservation
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Post to the tables
    app.post("/api/friends", function(req, res) {
        let arrSum = (array) => {
            return array.reduce(( x, y ) => parseInt(x) + parseInt(y), 0);
        }

        let findFriend = () => {
            var userSum = arrSum(req.body.scores);
            var friend = friendsData[0]
            var current

            for (let i = 1; i < friendsData.length; i++) {
                current = friendsData[i]
                    var friendDiff = Math.abs(userSum - arrSum(friend.scores))
                    var currentDiff = Math.abs(userSum - arrSum(current.scores))
                    console.log(`friend is: ${friend.name} and diff is: ${friendDiff}`);
                    console.log(`current is: ${current.name} and diff is: ${currentDiff}`);
                    if (friendDiff > currentDiff) {
                        friend = current
                        console.log("new friend " + friend.name + "\n");
                    } else {
                        console.log("same friend\n");
                    }
            }

            return friend
        }

        res.json(findFriend());
        friendsData .push(req.body);
        console.log("JSON Sent and user pushed to array");
    })
}