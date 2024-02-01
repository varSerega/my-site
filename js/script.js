
    document.querySelector(".five").addEventListener('click', function(){
      Swal.fire({
        customClass: 'swal-height',
        showClass:{ popup:'animated flipInX faster'},
        hideClass:{ popup:'animated fadeOut faster'},
        html:
          `<br>
          <a href="https://www.culture.ru/events/3196238/vystavka-kraski-obrazy-i-lica"target="_blank" ><button class="first">Анонс. Краснодар</button></a>
          <a href="https://vk.com/myhistoryparkkzn?w=wall-157989344_4959"target="_blank" ><button class="first">&nbsp;&nbsp;  Анонс. Казань&nbsp;&nbsp;  </button></a>
          <a href="https://volgograd.myhistorypark.ru/for-visitors/events/kraski,-obrazyi-i-licza.html"target="_blank" ><button class="first">Анонс. Волгоград</button></a>
          <br><br>`,
          target: document.getElementById('.five'),
          background: '',
          width:900,
          heightAuto: false,
          height: 1500,
          backdrop:true,
        showCloseButton: true,
        showConfirmButton: false, 
        focusConfirm: false,
        cancelButtonColor: '#000000',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonTextColor:'#fffff',
        cancelButtonAriaLabel: 'Thumbs down'})});





        