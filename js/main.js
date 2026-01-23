$(document).ready(function() {
  
    /* scroll */
    $("a").not("[data-target]").click(function(){
      $("html, body").animate({scrollTop: $("#rullet").offset().top+"px"});
      return false;
    });



    // COMMENTS
    $(function () {
        const horas = $('.comentario-propio .hora');
        const total = horas.length;
        const startOffset = 8; // 8 дней назад
        const endOffset = 1;   // 1 день назад
      
        horas.each(function (index) {
          // Вычисляем, на сколько дней назад приходится этот элемент
          const dayOffset = startOffset - ((startOffset - endOffset) * index / (total - 1));
          const date = new Date();
          date.setDate(date.getDate() - Math.round(dayOffset));
      
          // Устанавливаем случайное время от 08:05 до 19:05
          const hour = Math.floor(Math.random() * (19 - 8 + 1)) + 8;
          const minute = Math.floor(Math.random() * 60);
          const second = Math.floor(Math.random() * 60);
      
          date.setHours(hour);
          date.setMinutes(minute);
          date.setSeconds(second);
      
          // Форматируем в YYYY-MM-DD HH:MM:SS
          const formatted = date.getFullYear() + "-" +
            String(date.getMonth() + 1).padStart(2, '0') + "-" +
            String(date.getDate()).padStart(2, '0') + " " +
            String(date.getHours()).padStart(2, '0') + ":" +
            String(date.getMinutes()).padStart(2, '0') + ":" +
            String(date.getSeconds()).padStart(2, '0');
      
          $(this).text(formatted);
        });
      });
    
  });
  
  
  $(window).on('scroll', function() {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 10){
      $("#Logo").addClass("logo-off");
      $("#hr-hide").attr("class", "hr-logo");
      $("#logo-menu").addClass("logo-left");
    } else {
      $("#Logo").removeClass("logo-off");
      $("#hr-hide").attr("class", "hr-logo-off");
      $("#logo-menu").removeClass("logo-left");
    }
  });