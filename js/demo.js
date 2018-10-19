$(function () {  //页面加载完之后
    $('.pic ul li').mouseover(function () { //鼠标放到li上面让当前的对象width为789px
        $(this).stop(true).animate({
            width:'789px'
        },1000).siblings().stop(true).animate({
            width:'100px'
        },1000);   //stop() 参数中可以写2个true,如果只有一个true就相当于一个暂停,如果两个true会立即执行完当前这个动画

    });
});