let { init } = require('./script.js');
const  mybody  = require('./template.js');

jest.useFakeTimers();
describe('function init', function () {
  beforeEach(()=> {
    document.body.innerHTML = mybody;
  })
  afterEach(()=> {
    document.body.innerHTML = mybody;
  })
  it('should be defined', function () {
    expect(init).toBeDefined();
  })
  it('should be function', function () {
    expect(typeof init).toBe('function');
  })
  it('should init without errors', function(){
    expect(init()).toBe();
  })
  it('should add event listener to blockPhotos', function(){
    const blockPhotos = document.getElementById('photos-block');
    const mainPhoto = document.getElementById('mainPhoto');
    expect(init()).toBe();
    blockPhotos.dispatchEvent(new Event('click'));
    expect(mainPhoto.src).toBe('https://picsum.photos/1000/300?random=1');
  })
  it('should add event listener to blockPhotos', function(){
    const blockPhotos = document.getElementById('photos-block');
    const mainPhoto = document.getElementById('mainPhoto');
    expect(init()).toBe();
    blockPhotos.dataset = {type: 'img'}
    blockPhotos.dispatchEvent(new Event('click'));
    expect(mainPhoto.src).toBe('https://picsum.photos/1000/300?random=1');
  })
  it('should be slideshow was opened', function(){
    const openBtn = document.getElementById('open-btn');
    const standartSlider =  document.getElementById("content-slider");
    init();
    openBtn.dispatchEvent(new Event('click'));
    jest.advanceTimersByTime(1600);
    expect(standartSlider.classList.contains('show')).toBe(true);
    expect(setInterval).toHaveBeenCalled();
  })
  it('should be slideshow was closed', function(){
    const closeBtn = document.getElementById('close-btn');
    const standartSlider =  document.getElementById("content-slider");
    init();
    closeBtn.dispatchEvent(new Event('click'));
    expect(standartSlider.classList.contains('show')).toBe(false);
  })
  it('should be slideshow was closed', function(){

    window.dispatchEvent(new Event('DOMContentLoaded'))

  })
})