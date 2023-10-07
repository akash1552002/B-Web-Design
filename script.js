// gsap.to(".green",
//  {
//     rotation: 360, x: 100, duration: 1
// }
//  );
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    // freeMode: true,
    // autoHeight: true,

    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      },
    
  });

  var swiper = new Swiper(".mySwiper", {
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const countNum= document.querySelectorAll(".counter-number");
  const speed=250;
  countNum.forEach((curElem)=>{
    const updateNumber=()=>{
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNum = parseInt(curElem.innerText);
        const icrNum=Math.trunc(targetNumber/speed);
        if(initialNum<targetNumber){
            curElem.innerText=`${(initialNum+icrNum)}+`;
            // curElem.innerText=`${(initialNum+icrNum).repalce}+`;
            

            setTimeout(updateNumber,10)
        }
    };

    updateNumber();
  });