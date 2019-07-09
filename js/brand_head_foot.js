
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

  
// 탑버튼
  $("#top_btn").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
  });
});
