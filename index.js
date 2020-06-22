// Add your Circle class here
class Circle {
  constructor(radis) {
    this.radius=radius;
  }
  set diameter(radius){
    this.diameter= this.radius *2;
  }
  get diameter(){
    return this.diameter;
  }
  set circumference(diameter){
    this.circumference= Math.PI *this.diameter;
  }
  get circumference(){
    return this.circumference;
  }
  set area(radis){
    this.area=Math.PI * Math.pow(this.radius, 2);
  }
  get area (){
    return thid.area;
  }
}
