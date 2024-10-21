class car{
  this.model;
  this.year;
  function honk(){
    console.log("beep")
  }
}
class cadilac extends car{
  constructor(){
    console.log(this.prototype);
  }
}