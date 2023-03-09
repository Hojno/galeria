

fetch('http://localhost:3000/GetDirectores').then(x => x.json()).then(y=> {
    console.log(y);
    let _new = y;
    for(let x = 0; x<y[0].length; x++) {
        let element = document.createElement('button');
        document.getElementById('otherButtons').appendChild(element);
        element.innerText = y[0][x];
        element.id = y[0][x];
        document.getElementById(element.id).addEventListener('click', () => {
          document.getElementById('photoContainer').innerHTML = '';
          console.log(element.id);
          const find = (elementFind) => elementFind == element.id;
          const found = (y[0].findIndex(find)+1);
          if(y[found].length == 0) {

          } else {
            for(let x = 0; x<y[found].length; x++) {
              let elementTwo = document.createElement('img');
              elementTwo.src = '../images/' + element.id + '/' + y[found][x];
              document.getElementById('photoContainer').appendChild(elementTwo);
              elementTwo.classList.add('photo1');
            }
          }
        })
     }
});

document.addEventListener('click',(e) =>
  {
    let elementClass = e.target.className;
    if (elementClass !== '') {
      console.log(elementClass);
    }

    if (elementClass === 'photo1') {
        console.log(elementClass);
        console.log(e.target.src);
        document.getElementById('preview').classList.toggle('showPreview');
        document.getElementById('imagePreview').src = e.target.src;
        document.getElementById('imagePreview').classList.toggle('animation');
    } 
  }
);

document.getElementById('menuPhoto').addEventListener('click', () => {
  document.getElementById('otherButtons').classList.toggle('height');
})

document.getElementById('preview').addEventListener('click', () => {
    document.getElementById('preview').classList.toggle('showPreview');
})