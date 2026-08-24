function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        const user = { id: 101, username: "Basant Malik" };
        callback(null, user);
    }, 1000);
}

function getProfile(id, callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        const profile = { username: "Basant Malik", location: "Greater Noida" };
        callback(null, profile);
    }, 1000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        const posts = ["post1", "post2", "post3"];
        callback(null, posts);
    }, 1000);
}

// Callback chaining
getUser(1, function (error, user) {
    if (error) {
        console.error(error);
        return;
    }

    getProfile(user.id, function (error, profile) {
        if (error) {
            console.error(error);
            return;
        }

        getPosts(profile.username, function (error, posts) {
            if (error) {
                console.error(error);
                return;
            }

            console.log(`Fetched Posts: ${posts}`);
        });
    });
});
