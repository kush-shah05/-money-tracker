// const twosum=(arr,target)=>{
//     let newarr=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 newarr.push(i,j);
//                 return newarr;
//             }
//         }
//     }
// }

// console.log(twosum([1,3,7,6],9))

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let left=0;
//     let right=1;

//     let maxProfit=0;

//     while(right<prices.length){
//         if(prices[left]<prices[right]){
//             let profit=prices[right]-prices[left]
//             maxProfit=Math.max(profit,maxProfit)
//         }
//         else{
//             left=right;
//         }
//         right++;
//     }
// return maxProfit;
// };

// console.log(maxProfit([3,3,5,0,0,3,1,4]));

//fibonacci

//0 1 1 2 3 5 8 13 21 34

// const fibbonacci=(n)=>{

//     let arr=[0,1]
//     for(let i=2;i<n;i++){

//        let b=arr[i-1];
//        let a=arr[i-2];
//         let c=b+a;

//         arr.push(c)
//     }
// return arr;
// }

// console.log(fibbonacci(2))

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {

//     let a=[];
//     a=s.split('');
//     if(a.length===1){
//         return false;
//     }
//     console.log("arr",a)
//     let b=[];
//     let num=0;
//     let occ1=0;
//     let occ2=0;
//     let occ3=0;

//     while(num<a.length){

//         if(a[num]==='{'|a[num]==='['|a[num]==='('){
//             if(a[num]==='{'){
//                 occ1++;
//                 b.push(a[num]);
//                 num++
//             }
//             if(a[num]==='('){
//                 occ2++;
//                 b.push(a[num]);
//                 num++
//             }
//             if(a[num]==='['){
//                 occ3++;
//                 b.push(a[num]);
//                 num++
//             }

//         }
//         else if(b.length!==0 && a[num]==='}'){
//                 if(b.includes('{') && occ1>=1 && b[b.length-1]==='{'){
//                     occ1--;
//                     b.pop();
//                     num++;

//                 }
//                 else{
//                     return false;
//                 }
//         }
//         else if(b.length!==0 && a[num]===']'){
//             if(b.includes('[') && occ3>=1&&b[b.length-1]==='['){
//                 b.pop();
//                 occ3--;
//                 num++;

//             }
//             else{
//                 return false;
//             }
//         }
//         else if(b.length!==0 && a[num]===')'){
//             if(b.includes('(') && occ2>=1&&b[b.length-1]==='('){
//                 b.pop();
//                 occ2--;
//                 num++;

//             }
//             else{
//                 return false;
//             }
//         }
//     else{
//         return false;
//     }

//     }
//     return b.length===0?true:false;
// };

// console.log(isValid("([([)]])"));

// var isValid = function(s) {
//     const stack = [];

//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }

//     return stack.length === 0;
// };

// console.log(isValid("()"));

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getAtIndex(index){
    let curr=this.head;
    let counter=0;
if(index>this.size){
    console.log('not possible')
}
    if(index===counter){
        console.log(this.head.data);
    }
    while(curr){
        counter++
        if(index===counter){
            console.log("at index",index,curr.data)
            break;
        }
        else{
            curr=curr.next;
        }

    }
  }


  insertAtFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  printListData() {
    let curr = this.head;
    let counter=0;
    while (curr) {
        counter++
      //console.log("next data",curr.next)

      console.log(curr.data,counter);
      curr = curr.next;
    }
    console.log("LinkedList size is:",this.size);
  }

  insertLastNode(data) {
    let curr = this.head;
    
    while (curr) {
      if (curr.next == null) {
        curr.next = new Node(data, null);
        this.size++;

        break;
      } else {
        curr = curr.next;
      }
    }
    if(!curr){
      this.head=new Node(data,null)
      this.size++;
    }
  }

  printReverseLL() {
    let curr = this.head;
    while (curr) {
      if (curr.next == null) {
        console.log(curr.data);
        curr = null;

        curr = this.head;

        // this.head=null;
        // this.next=null;
      } else {
        curr = curr.next;
      }
    }
  }

  removeAtIndex(index){
    let curr=this.head;
    let previous;

    let count=0;
    if(index>0 && index>this.size){
        return;
  }
  if(index===0){
    this.head=curr.next;
  }else{
    while(count<index){
        count++;
        previous=curr;
        curr=curr.next;
    }

    previous.next=curr.next;
  }
  this.size--;
  }

  insertAtIndex(index, data) {
    let counter = 1;
    let curr = this.head;
    if (index>this.size) {
      console.log("out of bound");
    }
    if (index === counter) {
      this.insertAtFirst(data);
    } 
      while (curr) {
        counter++;

        if (counter === index) {
          curr.next = new Node(data, curr.next);

          this.size++;
          break;
        } else {
          curr = curr.next;
        }
      }
    
  }

  clearList(){
    this.head=null;
    this.size=0;
  }
}
const ll = new LinkedList();
ll.insertLastNode(100)
ll.printListData()

ll.insertLastNode(200);
ll.printListData()

// ll.insertAtFirst(100);
// ll.insertAtFirst(200);
// // ll.insertAtFirst(300);

// // //console.log(ll);

// ll.insertLastNode(400);
// ll.insertAtFirst(567);
// ll.insertLastNode(999);
// ll.insertAtIndex(3,250);
// ll.insertAtIndex(6,800);
// ll.insertAtIndex(8,1000);
// ll.insertAtIndex(1,1);
// ll.getAtIndex(4)

// ll.printListData();

// ll.removeAtIndex(3);

// ll.printListData()
// ll.clearList();

//ll.printReverseLL();
