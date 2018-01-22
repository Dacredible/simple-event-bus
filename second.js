var obj2 = {
    name: "second.js",
    onchange: function (data) {
        console.log(data,"but second.js has triggered!!")
    }
};

eventBus.addListener(obj2);

var input2 = document.getElementsByTagName("input")[1];
var btn2 = document.getElementsByTagName("button")[1];

btn2.onclick = function () {
    eventBus.emit("second.js", "btn2 clicked with data: "+input2.value)
};