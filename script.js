var imgArray = [new ImageItem('./assets/1.png'),
                new ImageItem('./assets/2.png'),
                new ImageItem('./assets/3.png'),
                new ImageItem('./assets/4.png'),
                new ImageItem('./assets/5.png'),
                new ImageItem('./assets/6.png'),
];

function ImageItem(src){
    this.image = new Image();
    this.src = src;
};

function loadImages(element){
    for (let i = 0; i < imgArray.length; i++) {
        document.getElementById("pic"+i).src = imgArray[i].src;
    };
};
console.log(imgArray);
$(document).ready(function() {
    loadImages();
    $("#onoff img:first-child").attr("src", "./assets/on_lamp.png");
    $("#onoff img:last-child").attr("src", "./assets/off_lamp.png");

    $("#onoff img:first-child").click(function(){
        $("#grid img").show();
    });
    $("#onoff img:last-child").click(function(){
        $("#grid img").hide();
    });

    $(".box").click(function(){
        $(this).children("img").fadeToggle(250);
    });
});