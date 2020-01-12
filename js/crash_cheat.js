<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         // $('[rel="icon"]').attr('href', "/image/favicon.png");
         document.title = '(ฅ>ω<*ฅ)~来找我啊';
         clearTimeout(titleTime);
     }
     else {
         // $('[rel="icon"]').attr('href', "/image/favicon.png");
         document.title = '(●ˇ∀ˇ●)~被你找到了';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
             // $('[rel="icon"]').attr('href', "/image/favicon.png");
         }, 2000);
     }
 });