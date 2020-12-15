$(function(){
  // article의 갯수 저장
  let numAc = $("article").length;
  console.log(numAc);
  
  // article 전체 가로 길이
  let widSec = numAc * 200;
  console.log(widSec);

  // 하나의 article에 넓어지는 값 더함
  let widTotal = widSec + 600;
  console.log(widTotal);

  // section의 넓이 값 대입
  $("section").width(widTotal);

  //body의 높이값 지정
  $("body").height(widSec);

  // 문서의 스크롤을 가장 아래에 초기화
  $("html,body").animate({scrollTop:widSec}, 300)

  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    console.log(scroll);

    $("section").stop().animate({left:-scroll}, 300)
  });


  $("article h2").click(function(e){
    e.preventDefault();
    $(this).parent().addClass("on");
  })

  $("article span").click(function(){
    $(this).parent().removeClass("on");
  })


});