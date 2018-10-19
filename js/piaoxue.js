//随机:
//1.雪花产生的时候,距离浏览器的左边是随机的.
//2.每个雪花的下降的速度是随机的
//3.雪花的大小
//4.雪花下落之后,距离了浏览器的左边是随机
//5.雪花的透明度是随机的

var minSize = 5; //雪片最小的尺寸
var maxSize = 50;  //雪片最大的尺寸
var newOn = 600;  //设置多少时间产生一个雪片0.2s
var flakeColor = "#fff";
var flake = $('<div></div>').css(
    {
        'position': 'absolute',
        'top': "-50px"
    }
).html('❉');

$(function () {
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function(){
        var startPositionLeft=Math.random()*documentWidth;  //产生一个雪花开始的随机数
        var startOpacity=0.7+Math.random()*0.3;  //让它不大于1,
        var endPositionTop=documentHeight;
        var endPositionLeft=Math.random()*documentWidth;
        var durationFall=8000+Math.random()*3000; //雪花下落的速度 2000-5000 2s~5s
       var sizeFlake=minSize+Math.random()*maxSize;
        flake.clone().appendTo('body').css({
            left:startPositionLeft,
            opacity:startOpacity,
            fontSize:sizeFlake,
            color:flakeColor
        }).animate({
            top:endPositionTop,
            left:endPositionLeft,
            opacity:0.5
        },durationFall,function(){
            $(this).remove();  //雪花落到底部的时候清除这个对象
        });
    },newOn);
})