Array.from(document.querySelectorAll('.menu-btn')).forEach(function(element) {
  element.addEventListener('click', function() {
    var id, idArr, type, val;

    id = this.id;
    idArr = id.split('-');

    type = idArr[0];
    val = idArr[1];

    var selected;

    selected = document.querySelectorAll(`.p${val}`);

    if (type === 'tipo') {
      this.classList.toggle('selected');
      for (let i = 0; i < selected.length; i++) {
        selected[i].classList.toggle('selected');
      }
    } else {
      var plantaBtn = document.querySelectorAll('.piso');
      for (let i = 0; i < plantaBtn.length; i++) {
        plantaBtn[i].classList.remove('selected');
      }
      var plantas = document.querySelectorAll('.planta');
      for (let i = 0; i < plantas.length; i++) {
        plantas[i].classList.remove('selected');
      }
      var picada = document.querySelector(`.p${val}`);
      picada.classList.add('selected');
      this.classList.add('selected');
    }
  });
});
