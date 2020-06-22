// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius=radius;
  }

  set diameter(diameter){
    this._diameter= diameter;
  }
  get diameter(){
    return this.diameter|| this.radius *2;
  }
  set circumference(circumference){
    this.circumference=circumference;
  }
  get circumference(){
    return  Math.PI *this.diameter || this.circumference;
  }
  set area(radis){
    this.area=Math.PI * Math.pow(this.radius, 2);
  }
  get area (){
    return this.area;
  }
}
