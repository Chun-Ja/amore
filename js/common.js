
$(function(){

  // 스와이프  

  var swiper = new Swiper('.swiper-container', {
    
    autoplay: {
      delay: 2000,
      disableOnInteraction:false,
    },
  });

  swiper.on("slideChange",function(){
    var slideIndex=swiper.activeIndex;
    console.log(slideIndex);
    $("#b_bot_txt li").removeClass("on");
    $("#b_bot_txt li").eq(slideIndex).addClass("on");
    clearInterval(id);
    width = 0;
    id = setInterval(frame, tmp/100);
  });

  $('#b_bot_txt li').on('click',function(){
    $('#b_bot_txt li').removeClass('on');
    $(this).addClass('on');
    var thisindex=$(this).index();
    
    swiper.slideTo(thisindex,0,false);
  });

    // 프로그레스 자동실행
    var width = 0;
    var tmp=2000;
    var id = setInterval(frame,tmp/100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        $("#progress").css("width",width+"%" );
      }
    }

 // 섹션 배너
  var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop:true,
    breakpoints: {
      601: {
        slidesPerView: 1,
      }
    }
  });
  $(".swiper-slide-txt").load("data00.html");
  swiper2.on("slideChange",function(){
    var indexNum=swiper2.realIndex;
    console.log(indexNum);
    if(indexNum==6){
      indexNum=0;
    }else if(indexNum<0){
      indexNum=5;
    }
    
    var text="data0"+indexNum+".html";
    console.log(text);
    $(".swiper-slide-txt").load(text)
    
  });

});
