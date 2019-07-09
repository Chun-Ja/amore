
$(function(){

  $("#menu_mo").hide();
  $("#search").hide();
  // 검색창
  $(".search_btn").on("click",function(){
    $("#search").toggle(300);
  });
  // 닫기버튼
  $(".close_btn").on("click",function(){
    $("#search").hide();
    $("#menu_mo").hide();
  });
  // 햄버튼
  $("#ham_btn").on("click",function(){
    $("#menu_mo").toggle(300);
  });
  $('#header_pc').on('mouseover',function(){
    $('#header_pc').css("background","#062c5e");  
    console.log("마우스인") ;   
  });
  $("#header_pc").on("mouseleave",function(){
    $('#header_pc').css("background","none");
    console.log("마우스아웃") ;   
  });



  $(window).scroll(function(){//스크롤 이벤트
    var scltop = $(window).scrollTop();//스크롤 거리 구하기
      if (scltop >= 70) {
        $('#header_pc').css("background","#062c5e");
          console.log("50이상");
      }else{
        $('#header_pc').css("background","none");
        console.log("50미만");
      }
  });

  
// 탑버튼
  $("#top_btn").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
  });
});
