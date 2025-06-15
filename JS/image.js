window.onload = () => {
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');
    
    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');
    
    /* Declaring the array of image filenames */
    
    const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.png`, `pic5.jpg`];
    const alts = {
      'pic1.jpg' : 'Code coffee',
      'pic2.jpg' : 'Funny programmer',
      'pic3.jpg' : 'Programmer wallpapers',
      'pic4.png' : 'Programmer gadgets',
      'pic5.jpg' : 'Programmers at day and at night'
    }
    /* Looping through images */
    
    for (const image of images) {
      const newImage = document.createElement('img');
      newImage.setAttribute('src', `Images/${image}`);
      newImage.setAttribute('alt', alts[image]);
      thumbBar.appendChild(newImage);
      newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
    }
    
  
}