
<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         // $('[rel="favicon"]').attr('href', "/image/favicon.png");
         document.title = '(ฅ>ω<*ฅ)~我藏好了';
         clearTimeout(titleTime);
     }
     else {
         // $('[rel="favicon"]').attr('href', "/image/favicon.png");
         document.title = '(●ˇ∀ˇ●)~被你找到了';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
             // $('[rel="favicon"]').attr('href', "/image/favicon.png");
         }, 2000);
     }
 });