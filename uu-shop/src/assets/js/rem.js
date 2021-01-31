!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=720,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||375;n>750&&(n=750);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);




// (function(doc, win) {
//     var docEl = doc.documentElement,
//       resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//       recalc = function() {
//         var clientWidth = docEl.clientWidth; //获取设备尺寸
//         if (!clientWidth) return;
//         if (clientWidth >= 375) {
//           //设计稿宽度
//           docEl.style.fontSize = "100px";
//         } else {
//           docEl.style.fontSize = 100 * (clientWidth / 375) + "px";
//         }
//       };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false); //绑定事件
//     doc.addEventListener("DOMContentLoaded", recalc, false);
//   })(document, window);