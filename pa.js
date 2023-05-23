'use strict';

console.log('Command line:',process.argv);

console.log('------------------------------------------------------------');

console.log('Command line split:',process.argv.toString().split(' '));

console.log('------------------------------------------------------------');

for(let a of process.argv){
  console.log(a.length,a);
  if(a.length > 2 && a[0] === '-') a.split('').forEach((i,j)=>{console.log(i,j);});
}

console.log('------------------------------------------------------------');

process.argv.forEach((i,j)=>{
  console.log(j,i.length,i);
  if(i.length > 2 && i[0] === '-') i.split('').forEach((x,y)=>{console.log(j,y,x);});
}); 

console.log('------------------------------------------------------------');

/*
process.argv.forEach((i,j)=>{
  console.log(j,i.length,i);
  if(i.length > 2 && i[0] === '-') i.split('').forEach((x,y)=>{console.log(j,y,x);});
}); 
*/
for(let c = 2, l = process.argv.length; c < l; c++){

  let cur = process.argv[c];
  let nxt = process.argv[c+1];

  // if(cur.length > 2 && cur[0] === '-'){
  if(cur.length > 2 && cur[0] === '-'){
    console.log('flags: ', c,l,cur);
    cur.split('').forEach((x,y)=>{console.log(c,y,x === '-' ? ' ' + x : ' flag: ' + x);});
  } else if (cur[0] === '-' && nxt.length > 0 && nxt[0] !== '-'){
    console.log('parms: ', c,l,cur, nxt);
    c += 1;
  } else if (cur[0] === '-'){
    console.log('flag: ', c,l,cur);
  } else {
    console.log('standalone:',c,l,cur);
  }
}

console.log('------------------------------------------------------------');
