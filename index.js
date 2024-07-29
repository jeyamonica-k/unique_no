var arr1=[0,1,2,4,5,6,2,9,8,4,0,,6]
var arr2=arr1
var list=[]

for(var i=0;i<arr1.length;i++){
  
  var count=0
  for(var j=0;j<arr2.length;j++){
    if(arr1[i]==arr2[j]){
      count=count+1
    }
  }
  if(count==1){
    list=arr1[i]
    console.log(list)
  }
}