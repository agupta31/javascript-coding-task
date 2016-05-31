var s="LRRL.LR.LRR.R.LRRL.";
var arr=s.split('');
var k=arr.length;
var newArr=new Array(k);


printArr(arr);
function findPattern(arr,newArr,speed){
       
         if(isEmpty(arr))
             return;
    
       for(var i=0;i<arr.length;i++){
              if(arr[i]=='R'||arr[i]=='L' ||arr[i]=='Y'){
                      if(arr[i]=='R'){
                        
                              if(i<=arr.length-(speed+1)){
                                  if(newArr[i+speed]=='L')
                                       newArr[i+speed]='Y';
                                   else
                                       newArr[i+speed]='R';
                              }
                              else
                                  continue;
                          }
           
                      else if(arr[i]=='L'){
                             if(i>=speed){
                                 if(newArr[i-speed]=='R')
                                         newArr[i-speed]='Y';
                                     
                                  else
                                      newArr[i-speed]='L';
                                 
                                     }
                        
                             else
                                  continue;
                                 
                          }
                      else{
                           if(i>=speed && i<=arr.length-(speed+1)){
                                 newArr[i-speed]='L';
                                 newArr[i+speed]='R';
                               }
                      }
           
               }
              else
                  continue;
      
          }
    
          printArr(newArr);    
          arr=newArr;
          newArr=new Array(arr.length);
    
          setTimeout(function(){
            findPattern(arr,newArr,speed);
          },1000);
          
          
       }
           
function printArr(newArr,speed){
    for(var i=0;i<newArr.length;i++){
         if(newArr[i]=='R' || newArr[i]=='L' ||newArr[i]=='Y')
           document.getElementsByTagName('h1')[0].innerHTML+='X';  
         else
           document.getElementsByTagName('h1')[0].innerHTML+='.';  
    }
       document.getElementsByTagName('h1')[0].innerHTML+='<br/>';  
         
          
}

function isEmpty(arr){
    for(var i=0;i<arr.length;i++){
         if(arr[i]=='L'||arr[i]=='R'||arr[i]=='Y')
             return false;
    }
    return true;
    
}

findPattern(arr,newArr,1);
