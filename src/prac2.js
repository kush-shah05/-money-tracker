// var rotate = function(nums, k) {
// let newarr=[];

// for(let i = 0;i<k;i++){
//     newarr.push(nums.pop());
// }
// newarr.reverse();

// return newarr.concat(nums);

// };
// console.log(rotate([-1,-100,3,99],2));

// var rotate = function(nums, k) {
//     let arr=[]
//     console.log(nums.length)
//     let a=nums.length-k;
//     for(let i=0;i<a;i++){

//     arr.push(nums.shift());
//     console.log(arr)
//     }

//     return nums.concat(arr)

//     };
//     console.log('final',rotate([-1,-100,3,99]
//         ,2));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// var reverseList = function(linkedlist) {
//   var node = linkedlist;
//   var previous = null;

//   while(node) {
//     // save next or you lose it!!!
//     var save = node.next;
//     // reverse pointer
//     node.next = previous;
//     // increment previous to current node
//     previous = node;
//     // increment node to next node or null at end of list
//     node = save;
//   }
//    return previous   // Change the list head !!!
// }
// reverseList([1,2,3,4,5]);

// * @param {ListNode} list1
// * @param {ListNode} list2
// * @return {ListNode}
// */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head=null;
    this.size=0;
  }

  listCreation(data){
    let curr=this.head;
    let front;
    for(let i=0;i<data.length;i++){

      if(this.size===0){
         this.head=new Node(data[i],this.next);
         this.size++;
      }
      else{
        front=new Node(data[i],this.next)
        this.next=front;
        this.size++
      }
    }
    
  }
  printListData() {
    let curr = this.head;
    let neww=(curr.next)
    let counter=0;
    while (curr) {
        counter++
      //console.log("next data",curr.next)

      console.log(curr.data,counter);
      curr = curr.next;
    }
    console.log("LinkedList size is:",this.size);
  }
}
let obj=new LinkedList();
obj.listCreation([1,2]);
obj.printListData();
