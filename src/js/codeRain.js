"use strict";
//let xint = process.stdout.columns,yint = process.stdout.rows;
let xint,yint;
//first rgb and final rgb
const colorInfo={
  r1:27,
  g1:64,
  b1:27,
  r2:4,
  g2:255,
  b2:0
}
const length = 30;
//color change steps
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const rr=((colorInfo.r2-colorInfo.r1)/length)^0,gr=((colorInfo.g2-colorInfo.g1)/length)^0,br=((colorInfo.b2-colorInfo.b1)/length)^0;
class CodeRain{
  constructor(){
    this.x = getRandomInt(xint);
    this.y=-length;
  }
  draw(){
    if(this.y>0)process.stdout.cursorTo(this.x,this.y);
    else process.stdout.cursorTo(this.x,0);
    process.stdout.write(' ');
    for(let c=0;c<length;c++){
      if(this.y+c<=0)continue;
      process.stdout.write('\x1b[B\x1b[D');
      if(this.y+c>yint)break;
      else if(c==length-1)process.stdout.write('\x1b[97m');
      else process.stdout.write(`\x1b[38;2;${colorInfo.r1+c*rr};${colorInfo.g1+c*gr};${colorInfo.b1+c*br}m`);
      process.stdout.write(String.fromCharCode(getRandomInt(93)+33));
    }
    this.y++;
  }
}
let rain = [];
/**
 * 
 * @param {number} l line 
 * @param {number} c column
 */
const setCoordinate = (l,c) =>{
  xint = c;
  yint = l;
}
let mainLoop;
/**
 * @returns {number} timeInterval ID. clearInterval(nIntervId) to stop the loop.
 */
const startRain = ()=>{
  mainLoop = setInterval(()=>{
    rain.push(new CodeRain());
    rain.forEach((value,index)=>{
      value.draw();
      if(value.y>yint+1)delete rain[index];
    })
  },15);
  return mainLoop;
}
const stopRain = () =>{
  clearInterval(mainLoop);
}
export {setCoordinate, startRain, stopRain};
//module.exports = {setCoordinate, startRain, stopRain};