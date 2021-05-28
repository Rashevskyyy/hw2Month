function init(){
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const photos = document.querySelectorAll('.content__scroll-photos__block');
  const blockPhotos = document.getElementById('photos-block');
  const mainPhoto = document.getElementById('mainPhoto');
  const slider = document.getElementById('slider')
  let sliderInterval;

  mainPhoto.src = photos[0].src;

  blockPhotos.addEventListener('click', (e) => {
      const img = e.target;
      if(!(img.dataset.type === 'img'))return;
      mainPhoto.src = img.src;
  });
  openBtn.addEventListener('click', () =>{
      openWindow();
      sliderPhotos();
  })
  closeBtn.addEventListener('click', () =>{
      closeWindow();
      clearTimeout(sliderInterval);
  })
  function sliderPhotos (){
      let i=0;
      slider.src = photos[i].src;
      sliderInterval = setInterval(()=>{
         i++;
         slider.src = photos[i].src;
      }, 1500)
  }
  function openWindow(){
      document.getElementById("content-slider").classList.toggle("show");
  }
  function closeWindow(){
      document.getElementById("content-slider").classList.remove("show");
  }
}

window.addEventListener('DOMContentLoaded', () => {
  init();
})

module.exports = { init }