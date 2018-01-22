var obj1 = {
    name: "first.js",
    onchange: function (data) {
        console.log(data, "but first.js has triggered!!")
    }
};

eventBus.addListener(obj1);

var input1 = document.getElementsByTagName("input")[0];
var btn1 = document.getElementsByTagName("button")[0];

btn1.onclick = function () {
    eventBus.emit("first.js", "btn1 clicked with data: "+input1.value)
};