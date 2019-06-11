(function(doc,win){
    var docEl =doc.documentElement,   // 根节点   获取html
    resizeEvt='orientationchange' in window?'orientationchange':'resize',
    // orientationchange==》屏幕旋转事件   但是部分浏览器存在兼容性
    relalc=function(){
        var clientWidth=docEl.clientWidth;
        if(!clientWidth) return;
        docEl.style.fontSize=clientWidth/3.75+"px";
        // iphone6   375       750
    };
    if(!addEventListener) return
    win.addEventListener(resizeEvt,relalc,false);  
    doc.addEventListener("DOMContentLoaded",relalc,false)
    // DOMContentLoaded=>html结构加载出来  就执行
})(document,window);


