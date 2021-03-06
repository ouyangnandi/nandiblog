(function(exports){crossfilter.version="1.3.11";function crossfilter_identity(d){return d;}
crossfilter.permute=permute;function permute(array,index){for(var i=0,n=index.length,copy=new Array(n);i<n;++i){copy[i]=array[index[i]];}
return copy;}
var bisect=crossfilter.bisect=bisect_by(crossfilter_identity);bisect.by=bisect_by;function bisect_by(f){function bisectLeft(a,x,lo,hi){while(lo<hi){var mid=lo+ hi>>>1;if(f(a[mid])<x)lo=mid+ 1;else hi=mid;}
return lo;}
function bisectRight(a,x,lo,hi){while(lo<hi){var mid=lo+ hi>>>1;if(x<f(a[mid]))hi=mid;else lo=mid+ 1;}
return lo;}
bisectRight.right=bisectRight;bisectRight.left=bisectLeft;return bisectRight;}
var heap=crossfilter.heap=heap_by(crossfilter_identity);heap.by=heap_by;function heap_by(f){function heap(a,lo,hi){var n=hi- lo,i=(n>>>1)+ 1;while(--i>0)sift(a,i,n,lo);return a;}
function sort(a,lo,hi){var n=hi- lo,t;while(--n>0)t=a[lo],a[lo]=a[lo+ n],a[lo+ n]=t,sift(a,1,n,lo);return a;}
function sift(a,i,n,lo){var d=a[--lo+ i],x=f(d),child;while((child=i<<1)<=n){if(child<n&&f(a[lo+ child])>f(a[lo+ child+ 1]))child++;if(x<=f(a[lo+ child]))break;a[lo+ i]=a[lo+ child];i=child;}
a[lo+ i]=d;}
heap.sort=sort;return heap;}
var heapselect=crossfilter.heapselect=heapselect_by(crossfilter_identity);heapselect.by=heapselect_by;function heapselect_by(f){var heap=heap_by(f);function heapselect(a,lo,hi,k){var queue=new Array(k=Math.min(hi- lo,k)),min,i,x,d;for(i=0;i<k;++i)queue[i]=a[lo++];heap(queue,0,k);if(lo<hi){min=f(queue[0]);do{if(x=f(d=a[lo])>min){queue[0]=d;min=f(heap(queue,0,k)[0]);}}while(++lo<hi);}
return queue;}
return heapselect;}
var insertionsort=crossfilter.insertionsort=insertionsort_by(crossfilter_identity);insertionsort.by=insertionsort_by;function insertionsort_by(f){function insertionsort(a,lo,hi){for(var i=lo+ 1;i<hi;++i){for(var j=i,t=a[i],x=f(t);j>lo&&f(a[j- 1])>x;--j){a[j]=a[j- 1];}
a[j]=t;}
return a;}
return insertionsort;}
var quicksort=crossfilter.quicksort=quicksort_by(crossfilter_identity);quicksort.by=quicksort_by;function quicksort_by(f){var insertionsort=insertionsort_by(f);function sort(a,lo,hi){return(hi- lo<quicksort_sizeThreshold?insertionsort:quicksort)(a,lo,hi);}
function quicksort(a,lo,hi){var sixth=(hi- lo)/ 6 | 0,
i1=lo+ sixth,i5=hi- 1- sixth,i3=lo+ hi- 1>>1,i2=i3- sixth,i4=i3+ sixth;var e1=a[i1],x1=f(e1),e2=a[i2],x2=f(e2),e3=a[i3],x3=f(e3),e4=a[i4],x4=f(e4),e5=a[i5],x5=f(e5);var t;if(x1>x2)t=e1,e1=e2,e2=t,t=x1,x1=x2,x2=t;if(x4>x5)t=e4,e4=e5,e5=t,t=x4,x4=x5,x5=t;if(x1>x3)t=e1,e1=e3,e3=t,t=x1,x1=x3,x3=t;if(x2>x3)t=e2,e2=e3,e3=t,t=x2,x2=x3,x3=t;if(x1>x4)t=e1,e1=e4,e4=t,t=x1,x1=x4,x4=t;if(x3>x4)t=e3,e3=e4,e4=t,t=x3,x3=x4,x4=t;if(x2>x5)t=e2,e2=e5,e5=t,t=x2,x2=x5,x5=t;if(x2>x3)t=e2,e2=e3,e3=t,t=x2,x2=x3,x3=t;if(x4>x5)t=e4,e4=e5,e5=t,t=x4,x4=x5,x5=t;var pivot1=e2,pivotValue1=x2,pivot2=e4,pivotValue2=x4;a[i1]=e1;a[i2]=a[lo];a[i3]=e3;a[i4]=a[hi- 1];a[i5]=e5;var less=lo+ 1,great=hi- 2;var pivotsEqual=pivotValue1<=pivotValue2&&pivotValue1>=pivotValue2;if(pivotsEqual){for(var k=less;k<=great;++k){var ek=a[k],xk=f(ek);if(xk<pivotValue1){if(k!==less){a[k]=a[less];a[less]=ek;}
++less;}else if(xk>pivotValue1){while(true){var greatValue=f(a[great]);if(greatValue>pivotValue1){great--;continue;}else if(greatValue<pivotValue1){a[k]=a[less];a[less++]=a[great];a[great--]=ek;break;}else{a[k]=a[great];a[great--]=ek;break;}}}}}else{for(var k=less;k<=great;k++){var ek=a[k],xk=f(ek);if(xk<pivotValue1){if(k!==less){a[k]=a[less];a[less]=ek;}
++less;}else{if(xk>pivotValue2){while(true){var greatValue=f(a[great]);if(greatValue>pivotValue2){great--;if(great<k)break;continue;}else{if(greatValue<pivotValue1){a[k]=a[less];a[less++]=a[great];a[great--]=ek;}else{a[k]=a[great];a[great--]=ek;}
break;}}}}}}
a[lo]=a[less- 1];a[less- 1]=pivot1;a[hi- 1]=a[great+ 1];a[great+ 1]=pivot2;sort(a,lo,less- 1);sort(a,great+ 2,hi);if(pivotsEqual){return a;}
if(less<i1&&great>i5){var lessValue,greatValue;while((lessValue=f(a[less]))<=pivotValue1&&lessValue>=pivotValue1)++less;while((greatValue=f(a[great]))<=pivotValue2&&greatValue>=pivotValue2)--great;for(var k=less;k<=great;k++){var ek=a[k],xk=f(ek);if(xk<=pivotValue1&&xk>=pivotValue1){if(k!==less){a[k]=a[less];a[less]=ek;}
less++;}else{if(xk<=pivotValue2&&xk>=pivotValue2){while(true){var greatValue=f(a[great]);if(greatValue<=pivotValue2&&greatValue>=pivotValue2){great--;if(great<k)break;continue;}else{if(greatValue<pivotValue1){a[k]=a[less];a[less++]=a[great];a[great--]=ek;}else{a[k]=a[great];a[great--]=ek;}
break;}}}}}}
return sort(a,less,great+ 1);}
return sort;}
var quicksort_sizeThreshold=32;var crossfilter_array8=crossfilter_arrayUntyped,crossfilter_array16=crossfilter_arrayUntyped,crossfilter_array32=crossfilter_arrayUntyped,crossfilter_arrayLengthen=crossfilter_arrayLengthenUntyped,crossfilter_arrayWiden=crossfilter_arrayWidenUntyped;if(typeof Uint8Array!=="undefined"){crossfilter_array8=function(n){return new Uint8Array(n);};crossfilter_array16=function(n){return new Uint16Array(n);};crossfilter_array32=function(n){return new Uint32Array(n);};crossfilter_arrayLengthen=function(array,length){if(array.length>=length)return array;var copy=new array.constructor(length);copy.set(array);return copy;};crossfilter_arrayWiden=function(array,width){var copy;switch(width){case 16:copy=crossfilter_array16(array.length);break;case 32:copy=crossfilter_array32(array.length);break;default:throw new Error("invalid array width!");}
copy.set(array);return copy;};}
function crossfilter_arrayUntyped(n){var array=new Array(n),i=-1;while(++i<n)array[i]=0;return array;}
function crossfilter_arrayLengthenUntyped(array,length){var n=array.length;while(n<length)array[n++]=0;return array;}
function crossfilter_arrayWidenUntyped(array,width){if(width>32)throw new Error("invalid array width!");return array;}
function crossfilter_filterExact(bisect,value){return function(values){var n=values.length;return[bisect.left(values,value,0,n),bisect.right(values,value,0,n)];};}
function crossfilter_filterRange(bisect,range){var min=range[0],max=range[1];return function(values){var n=values.length;return[bisect.left(values,min,0,n),bisect.left(values,max,0,n)];};}
function crossfilter_filterAll(values){return[0,values.length];}
function crossfilter_null(){return null;}
function crossfilter_zero(){return 0;}
function crossfilter_reduceIncrement(p){return p+ 1;}
function crossfilter_reduceDecrement(p){return p- 1;}
function crossfilter_reduceAdd(f){return function(p,v){return p+ +f(v);};}
function crossfilter_reduceSubtract(f){return function(p,v){return p- f(v);};}
exports.crossfilter=crossfilter;function crossfilter(){var crossfilter={add:add,remove:removeData,dimension:dimension,groupAll:groupAll,size:size};var data=[],n=0,m=0,M=8,filters=crossfilter_array8(0),filterListeners=[],dataListeners=[],removeDataListeners=[];function add(newData){var n0=n,n1=newData.length;if(n1){data=data.concat(newData);filters=crossfilter_arrayLengthen(filters,n+=n1);dataListeners.forEach(function(l){l(newData,n0,n1);});}
return crossfilter;}
function removeData(){var newIndex=crossfilter_index(n,n),removed=[];for(var i=0,j=0;i<n;++i){if(filters[i])newIndex[i]=j++;else removed.push(i);}
filterListeners.forEach(function(l){l(0,[],removed);});removeDataListeners.forEach(function(l){l(newIndex);});for(var i=0,j=0,k;i<n;++i){if(k=filters[i]){if(i!==j)filters[j]=k,data[j]=data[i];++j;}}
data.length=j;while(n>j)filters[--n]=0;}
function dimension(value){var dimension={filter:filter,filterExact:filterExact,filterRange:filterRange,filterFunction:filterFunction,filterAll:filterAll,top:top,bottom:bottom,group:group,groupAll:groupAll,dispose:dispose,remove:dispose};var one=~m&-~m,zero=~one,values,index,newValues,newIndex,sort=quicksort_by(function(i){return newValues[i];}),refilter=crossfilter_filterAll,refilterFunction,indexListeners=[],dimensionGroups=[],lo0=0,hi0=0;dataListeners.unshift(preAdd);dataListeners.push(postAdd);removeDataListeners.push(removeData);m|=one;if(M>=32?!one:m&(1<<M)- 1){filters=crossfilter_arrayWiden(filters,M<<=1);}
preAdd(data,0,n);postAdd(data,0,n);function preAdd(newData,n0,n1){newValues=newData.map(value);newIndex=sort(crossfilter_range(n1),0,n1);newValues=permute(newValues,newIndex);var bounds=refilter(newValues),lo1=bounds[0],hi1=bounds[1],i;if(refilterFunction){for(i=0;i<n1;++i){if(!refilterFunction(newValues[i],i))filters[newIndex[i]+ n0]|=one;}}else{for(i=0;i<lo1;++i)filters[newIndex[i]+ n0]|=one;for(i=hi1;i<n1;++i)filters[newIndex[i]+ n0]|=one;}
if(!n0){values=newValues;index=newIndex;lo0=lo1;hi0=hi1;return;}
var oldValues=values,oldIndex=index,i0=0,i1=0;values=new Array(n);index=crossfilter_index(n,n);for(i=0;i0<n0&&i1<n1;++i){if(oldValues[i0]<newValues[i1]){values[i]=oldValues[i0];index[i]=oldIndex[i0++];}else{values[i]=newValues[i1];index[i]=newIndex[i1++]+ n0;}}
for(;i0<n0;++i0,++i){values[i]=oldValues[i0];index[i]=oldIndex[i0];}
for(;i1<n1;++i1,++i){values[i]=newValues[i1];index[i]=newIndex[i1]+ n0;}
bounds=refilter(values),lo0=bounds[0],hi0=bounds[1];}
function postAdd(newData,n0,n1){indexListeners.forEach(function(l){l(newValues,newIndex,n0,n1);});newValues=newIndex=null;}
function removeData(reIndex){for(var i=0,j=0,k;i<n;++i){if(filters[k=index[i]]){if(i!==j)values[j]=values[i];index[j]=reIndex[k];++j;}}
values.length=j;while(j<n)index[j++]=0;var bounds=refilter(values);lo0=bounds[0],hi0=bounds[1];}
function filterIndexBounds(bounds){var lo1=bounds[0],hi1=bounds[1];if(refilterFunction){refilterFunction=null;filterIndexFunction(function(d,i){return lo1<=i&&i<hi1;});lo0=lo1;hi0=hi1;return dimension;}
var i,j,k,added=[],removed=[];if(lo1<lo0){for(i=lo1,j=Math.min(lo0,hi1);i<j;++i){filters[k=index[i]]^=one;added.push(k);}}else if(lo1>lo0){for(i=lo0,j=Math.min(lo1,hi0);i<j;++i){filters[k=index[i]]^=one;removed.push(k);}}
if(hi1>hi0){for(i=Math.max(lo1,hi0),j=hi1;i<j;++i){filters[k=index[i]]^=one;added.push(k);}}else if(hi1<hi0){for(i=Math.max(lo0,hi1),j=hi0;i<j;++i){filters[k=index[i]]^=one;removed.push(k);}}
lo0=lo1;hi0=hi1;filterListeners.forEach(function(l){l(one,added,removed);});return dimension;}
function filter(range){return range==null?filterAll():Array.isArray(range)?filterRange(range):typeof range==="function"?filterFunction(range):filterExact(range);}
function filterExact(value){return filterIndexBounds((refilter=crossfilter_filterExact(bisect,value))(values));}
function filterRange(range){return filterIndexBounds((refilter=crossfilter_filterRange(bisect,range))(values));}
function filterAll(){return filterIndexBounds((refilter=crossfilter_filterAll)(values));}
function filterFunction(f){refilter=crossfilter_filterAll;filterIndexFunction(refilterFunction=f);lo0=0;hi0=n;return dimension;}
function filterIndexFunction(f){var i,k,x,added=[],removed=[];for(i=0;i<n;++i){if(!(filters[k=index[i]]&one)^!!(x=f(values[i],i))){if(x)filters[k]&=zero,added.push(k);else filters[k]|=one,removed.push(k);}}
filterListeners.forEach(function(l){l(one,added,removed);});}
function top(k){var array=[],i=hi0,j;while(--i>=lo0&&k>0){if(!filters[j=index[i]]){array.push(data[j]);--k;}}
return array;}
function bottom(k){var array=[],i=lo0,j;while(i<hi0&&k>0){if(!filters[j=index[i]]){array.push(data[j]);--k;}
i++;}
return array;}
function group(key){var group={top:top,all:all,reduce:reduce,reduceCount:reduceCount,reduceSum:reduceSum,order:order,orderNatural:orderNatural,size:size,dispose:dispose,remove:dispose};dimensionGroups.push(group);var groups,groupIndex,groupWidth=8,groupCapacity=crossfilter_capacity(groupWidth),k=0,select,heap,reduceAdd,reduceRemove,reduceInitial,update=crossfilter_null,reset=crossfilter_null,resetNeeded=true,groupAll=key===crossfilter_null;if(arguments.length<1)key=crossfilter_identity;filterListeners.push(update);indexListeners.push(add);removeDataListeners.push(removeData);add(values,index,0,n);function add(newValues,newIndex,n0,n1){var oldGroups=groups,reIndex=crossfilter_index(k,groupCapacity),add=reduceAdd,initial=reduceInitial,k0=k,i0=0,i1=0,j,g0,x0,x1,g,x;if(resetNeeded)add=initial=crossfilter_null;groups=new Array(k),k=0;groupIndex=k0>1?crossfilter_arrayLengthen(groupIndex,n):crossfilter_index(n,groupCapacity);if(k0)x0=(g0=oldGroups[0]).key;while(i1<n1&&!((x1=key(newValues[i1]))>=x1))++i1;while(i1<n1){if(g0&&x0<=x1){g=g0,x=x0;reIndex[i0]=k;if(g0=oldGroups[++i0])x0=g0.key;}else{g={key:x1,value:initial()},x=x1;}
groups[k]=g;while(!(x1>x)){groupIndex[j=newIndex[i1]+ n0]=k;if(!(filters[j]&zero))g.value=add(g.value,data[j]);if(++i1>=n1)break;x1=key(newValues[i1]);}
groupIncrement();}
while(i0<k0){groups[reIndex[i0]=k]=oldGroups[i0++];groupIncrement();}
if(k>i0)for(i0=0;i0<n0;++i0){groupIndex[i0]=reIndex[groupIndex[i0]];}
j=filterListeners.indexOf(update);if(k>1){update=updateMany;reset=resetMany;}else{if(!k&&groupAll){k=1;groups=[{key:null,value:initial()}];}
if(k===1){update=updateOne;reset=resetOne;}else{update=crossfilter_null;reset=crossfilter_null;}
groupIndex=null;}
filterListeners[j]=update;function groupIncrement(){if(++k===groupCapacity){reIndex=crossfilter_arrayWiden(reIndex,groupWidth<<=1);groupIndex=crossfilter_arrayWiden(groupIndex,groupWidth);groupCapacity=crossfilter_capacity(groupWidth);}}}
function removeData(){if(k>1){var oldK=k,oldGroups=groups,seenGroups=crossfilter_index(oldK,oldK);for(var i=0,j=0;i<n;++i){if(filters[i]){seenGroups[groupIndex[j]=groupIndex[i]]=1;++j;}}
groups=[],k=0;for(i=0;i<oldK;++i){if(seenGroups[i]){seenGroups[i]=k++;groups.push(oldGroups[i]);}}
if(k>1){for(var i=0;i<j;++i)groupIndex[i]=seenGroups[groupIndex[i]];}else{groupIndex=null;}
filterListeners[filterListeners.indexOf(update)]=k>1?(reset=resetMany,update=updateMany):k===1?(reset=resetOne,update=updateOne):reset=update=crossfilter_null;}else if(k===1){if(groupAll)return;for(var i=0;i<n;++i)if(filters[i])return;groups=[],k=0;filterListeners[filterListeners.indexOf(update)]=update=reset=crossfilter_null;}}
function updateMany(filterOne,added,removed){if(filterOne===one||resetNeeded)return;var i,k,n,g;for(i=0,n=added.length;i<n;++i){if(!(filters[k=added[i]]&zero)){g=groups[groupIndex[k]];g.value=reduceAdd(g.value,data[k]);}}
for(i=0,n=removed.length;i<n;++i){if((filters[k=removed[i]]&zero)===filterOne){g=groups[groupIndex[k]];g.value=reduceRemove(g.value,data[k]);}}}
function updateOne(filterOne,added,removed){if(filterOne===one||resetNeeded)return;var i,k,n,g=groups[0];for(i=0,n=added.length;i<n;++i){if(!(filters[k=added[i]]&zero)){g.value=reduceAdd(g.value,data[k]);}}
for(i=0,n=removed.length;i<n;++i){if((filters[k=removed[i]]&zero)===filterOne){g.value=reduceRemove(g.value,data[k]);}}}
function resetMany(){var i,g;for(i=0;i<k;++i){groups[i].value=reduceInitial();}
for(i=0;i<n;++i){if(!(filters[i]&zero)){g=groups[groupIndex[i]];g.value=reduceAdd(g.value,data[i]);}}}
function resetOne(){var i,g=groups[0];g.value=reduceInitial();for(i=0;i<n;++i){if(!(filters[i]&zero)){g.value=reduceAdd(g.value,data[i]);}}}
function all(){if(resetNeeded)reset(),resetNeeded=false;return groups;}
function top(k){var top=select(all(),0,groups.length,k);return heap.sort(top,0,top.length);}
function reduce(add,remove,initial){reduceAdd=add;reduceRemove=remove;reduceInitial=initial;resetNeeded=true;return group;}
function reduceCount(){return reduce(crossfilter_reduceIncrement,crossfilter_reduceDecrement,crossfilter_zero);}
function reduceSum(value){return reduce(crossfilter_reduceAdd(value),crossfilter_reduceSubtract(value),crossfilter_zero);}
function order(value){select=heapselect_by(valueOf);heap=heap_by(valueOf);function valueOf(d){return value(d.value);}
return group;}
function orderNatural(){return order(crossfilter_identity);}
function size(){return k;}
function dispose(){var i=filterListeners.indexOf(update);if(i>=0)filterListeners.splice(i,1);i=indexListeners.indexOf(add);if(i>=0)indexListeners.splice(i,1);i=removeDataListeners.indexOf(removeData);if(i>=0)removeDataListeners.splice(i,1);return group;}
return reduceCount().orderNatural();}
function groupAll(){var g=group(crossfilter_null),all=g.all;delete g.all;delete g.top;delete g.order;delete g.orderNatural;delete g.size;g.value=function(){return all()[0].value;};return g;}
function dispose(){dimensionGroups.forEach(function(group){group.dispose();});var i=dataListeners.indexOf(preAdd);if(i>=0)dataListeners.splice(i,1);i=dataListeners.indexOf(postAdd);if(i>=0)dataListeners.splice(i,1);i=removeDataListeners.indexOf(removeData);if(i>=0)removeDataListeners.splice(i,1);m&=zero;return filterAll();}
return dimension;}
function groupAll(){var group={reduce:reduce,reduceCount:reduceCount,reduceSum:reduceSum,value:value,dispose:dispose,remove:dispose};var reduceValue,reduceAdd,reduceRemove,reduceInitial,resetNeeded=true;filterListeners.push(update);dataListeners.push(add);add(data,0,n);function add(newData,n0){var i;if(resetNeeded)return;for(i=n0;i<n;++i){if(!filters[i]){reduceValue=reduceAdd(reduceValue,data[i]);}}}
function update(filterOne,added,removed){var i,k,n;if(resetNeeded)return;for(i=0,n=added.length;i<n;++i){if(!filters[k=added[i]]){reduceValue=reduceAdd(reduceValue,data[k]);}}
for(i=0,n=removed.length;i<n;++i){if(filters[k=removed[i]]===filterOne){reduceValue=reduceRemove(reduceValue,data[k]);}}}
function reset(){var i;reduceValue=reduceInitial();for(i=0;i<n;++i){if(!filters[i]){reduceValue=reduceAdd(reduceValue,data[i]);}}}
function reduce(add,remove,initial){reduceAdd=add;reduceRemove=remove;reduceInitial=initial;resetNeeded=true;return group;}
function reduceCount(){return reduce(crossfilter_reduceIncrement,crossfilter_reduceDecrement,crossfilter_zero);}
function reduceSum(value){return reduce(crossfilter_reduceAdd(value),crossfilter_reduceSubtract(value),crossfilter_zero);}
function value(){if(resetNeeded)reset(),resetNeeded=false;return reduceValue;}
function dispose(){var i=filterListeners.indexOf(update);if(i>=0)filterListeners.splice(i);i=dataListeners.indexOf(add);if(i>=0)dataListeners.splice(i);return group;}
return reduceCount();}
function size(){return n;}
return arguments.length?add(arguments[0]):crossfilter;}
function crossfilter_index(n,m){return(m<0x101?crossfilter_array8:m<0x10001?crossfilter_array16:crossfilter_array32)(n);}
function crossfilter_range(n){var range=crossfilter_index(n,n);for(var i=-1;++i<n;)range[i]=i;return range;}
function crossfilter_capacity(w){return w===8?0x100:w===16?0x10000:0x100000000;}})(typeof exports!=='undefined'&&exports||this);