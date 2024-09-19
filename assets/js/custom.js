// let calcScrollValue = () => {
//     let scrollProgress = document.getElementById("progress");
//     let progressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     let calcHeight =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     let scrollValue = Math.round((pos * 100) / calcHeight);
//     if (pos > 100) {
//       scrollProgress.style.display = "grid";
//     } else {
//       scrollProgress.style.display = "none";
//     }
//     scrollProgress.addEventListener("click", () => {
//       document.documentElement.scrollTop = 0;
//     });
//     scrollProgress.style.background = `conic-gradient(#f3274c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
//   };
  
//   window.onscroll = calcScrollValue;
//   window.onload = calcScrollValue;

  // js backtop

  $(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()){
        $('#backtop').fadeIn();
      }else{
        $('#backtop').fadeOut();
      }
    });
    $("#backtop").click(function(){
      $('html,body').animate({scrollTop: 0}, 500);
    });
  });

  ///.container-automatically
  $(document).ready(function() {
    const interval = 2000; // 2 seconds
    let autoSlide = setInterval(updateImages, interval);
  
    function updateImages() {
      const imageContainers = $('.image-container');
      const firstImageContainer = imageContainers.first();
      const firstImageContent = firstImageContainer.html();
      
      imageContainers.each(function(index) {
        if (index < imageContainers.length - 1) {
          $(this).html(imageContainers.eq(index + 1).html());
        } else {
          $(this).html(firstImageContent);
        }
      });
  
      imageContainers.first().addClass('hidden');
      setTimeout(() => {
        imageContainers.first().removeClass('hidden');
      }, interval);
    }
  });
  //   $('#prev').click(function() {
  //     clearInterval(autoSlide); // Stop the auto-slide interval
  //     updateImages(); // Manually update images
  //     autoSlide = setInterval(updateImages, interval); // Restart the auto-slide interval
  //   });
  
  //   $('#next').click(function() {
  //     clearInterval(autoSlide); // Stop the auto-slide interval
  //     updateImages(); // Manually update images
  //     autoSlide = setInterval(updateImages, interval); // Restart the auto-slide interval
  //   });
  // });
  

  $(document).ready(function() {
    const interval = 2000; // 2 giây
    let autoSlide;
  
    function updateImages() {
      const imageContainers = $('.image-click');
      const firstImageContainer = imageContainers.first();
      const firstImageContent = firstImageContainer.html();
      
      imageContainers.each(function(index) {
        if (index < imageContainers.length - 1) {
          $(this).html(imageContainers.eq(index + 1).html());
        } else {
          $(this).html(firstImageContent);
        }
      });
  
      imageContainers.first().addClass('hidden');
      setTimeout(() => {
        imageContainers.first().removeClass('hidden');
      }, interval);
    }
  
    $('#next').click(function() {
      clearInterval(autoSlide); // Dừng tự động chuyển ảnh
      updateImages(); // Chuyển ảnh thủ công
      autoSlide = setInterval(updateImages, interval); // Khởi động lại tự động chuyển ảnh
    });
  
    autoSlide = setInterval(updateImages, interval); // Bắt đầu tự động chuyển ảnh
  });
  