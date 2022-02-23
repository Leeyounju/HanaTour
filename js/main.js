$(document).ready(function(){
    //메인메뉴에 마우스 오버했을 때 서브메뉴 나타남\
    $('nav>ul>li').hover(function(){
        $(this).find('.sub').stop().fadeIn();
    },
    function(){
        $(this).find('.sub').stop().fadeOut();
    });
    // mySwiper1 (슬라이드)
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
    });
    // 탭메뉴(s3 product)
    // 모든 내용 숨김
    $('.tab_con > div').hide();
    // 첫번째 내용만 보임
    $('.tab_con > div:first').show();
    // 탭 제목에 클릭 이벤트 설정
    $('.tab_title ul li').click(function(e){
        // a태그 속성을 막아주는 코드
        e.preventDefault();
        // 클릭한 메뉴(li) 인덱스 번호를 num 변수에 저장
        var num=$(this).index();
        // 모든 탭제목에서 active 제거
            $('.tab_title ul li a').removeClass('active')
        // 클릭한 탭제목에 active 설정
            $(this).find('a').addClass('active')
        // 모든 내용 숨김
        $('.tab_con > div').hide();
        // 클릭한 제목(li)과 같은 인덱스 번호를 가진 내용만 보임
        $('.tab_con > div').eq(num).show();
    });
    // mySwiper2 (슬라이드)
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
          autoplay: {
            delay: 5000,//3초
            disableOnInteraction: false,
          }
        });

    // mySwiper3 (슬라이드)
    var swiper = new Swiper(".mySwiper3", {
        efect:'fade', //fade in 효과
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
          autoplay: {
            delay: 5000,//3초
            disableOnInteraction: false,
          }
        });
        // family site
        //  패밀리 사이트 제목을 클릭하면 리스트(family_list)가 올라옴
        $('.family_title a').click(function(e){
          // a태그의 속성 막음
          e.preventDefault();
          $('.family_list').animate({'top':0});
          // 삼각형 방향바꿈(span)
          $('.family_title a span').css('background-position','bottom center');
        });
        // 패밀리 사이트 제목에서 마우스 아웃하면 family list 내려감
        $('.family').mouseleave(function(){
          $('.family_list').animate({'top':200});
          // 삼각형 방향바꿈(span)
          $('.family_title a span').css('background-position', 'top center');
        });


        // top 버튼 클릭하면 맨 위로 이동
        $('.top').click(function(){
           // 0은 화면 맨 윗쪽값
          $('html, body').animate({'scrollTop':0});
        });

        // window에 스크롤 이벤트 설정
        // 화면에서 얼마만큼 이동했는지, 어딜 보고있는지 감지 가능
        $(window).scroll(function(){

          // 브라우저에서 html 문서의 scrollTop값을 인식하여 winTop 변수에 저장
          // $(this)는 scroll이벤트가 발생한 객체(window)를 가리킨다
          var winTop=$(this).scrollTop();
          console.log(winTop);

          // offset().top = 스크롤 탑으로 부터 떨어진 거리
          // s2 영역의 위쪽 위치값 구해서 scroll1 변수에 저장
          var scroll1=$('section.s2').offset().top-600;
           // s2 영역의 위쪽 위치값 구해서 scroll2 변수에 저장
          var scroll2=$('section.s3').offset().top-600;
           // s2 영역의 위쪽 위치값 구해서 scroll3변수에 저장
          var scroll3=$('section.s4').offset().top-600;
           // s2 영역의 위쪽 위치값 구해서 scroll4 변수에 저장
          var scroll4=$('section.s5').offset().top-600;

          // 만약 s2 영역이 보이면, && ('그리고' 라는 뜻의 논리연산자. 조건 2개 이상인 조건문과 쓰임)
          if(scroll1<winTop && winTop<scroll2){
              $('section.s2 h1').addClass('active');
              $('section.s2 p').addClass('active');
              $('section.s2 .swiper').addClass('active');
            }
           
            // 만약 s3 영역이 보이면, && ('그리고' 라는 뜻의 논리연산자. 조건 2개 이상인 조건문과 쓰임)
          if(scroll2<winTop && winTop<scroll3){
            $('section.s3 h1').addClass('active');
            $('section.s3 p').addClass('active');
            $('section.s3 .tab').addClass('active');
            $('section.s3 .view_btn').addClass('active');
          } 
           // 만약 s4 영역이 보이면, && ('그리고' 라는 뜻의 논리연산자. 조건 2개 이상인 조건문과 쓰임)
           if(scroll3<winTop && winTop<scroll4){
            $('section.s4 h1').addClass('active');
            $('section.s4 p').addClass('active');
            $('section.s4 .gallery').addClass('active');
            $('section.s4 .s4_right').addClass('active');
            
          } 
          // 만약 s5 영역이 보이면, && ('그리고' 라는 뜻의 논리연산자. 조건 2개 이상인 조건문과 쓰임)
          if(scroll4< winTop){
            $('section.s5 h1').addClass('active');
            $('section.s5 p').addClass('active');
            $('section.s5 .event').addClass('active');
            
          } 



        });
        
});
