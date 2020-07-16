class Menu{
  constructor(elem){
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save(){
    alert('Saving');
  }

  load(){
    alert('Loading');
  }

  search(){
    alert('searching');
  }

  onClick(event){
    let action = event.target.dataset.action;
    if(action){
      this[action]();
    }
  }
}
new Menu(menu);

document.addEventListener('click', function(event){
  let id = event.target.dataset.toggleId;
  if(!id) return;

  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
})