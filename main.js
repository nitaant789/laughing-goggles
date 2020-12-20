var images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Damon_Hill_1995-2.jpg/330px-Damon_Hill_1995-2.jpg"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Michael_Schumacher_2001_Canada.jpg/330px-Michael_Schumacher_2001_Canada.jpg"
];

var i = 0;
function nextslide();
document.getElementById("album").src= images[i];
i++;