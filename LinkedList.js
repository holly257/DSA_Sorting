//Walk through the linked list code in the curriculum and understand it well.
//Then write a linked list class and its core functions
//(insertFirst, insertLast, remove, find) from scratch.

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(newItem, itemToInsertBefore) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        //if inserting before first item in list??
        if (this.head.value == itemToInsertBefore) {
            let firstNode = this.head;
            this.head = new _Node(newItem, this.head);
            this.head.next = firstNode;
            return;
        }

        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== itemToInsertBefore) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let newNode = new _Node(newItem);
        newNode.next = currNode;
        previousNode.next = newNode;
    }

    insertAfter(newItem, itemToInsertAfter) {
        // If the list is empty
        if (!this.head) {
            return null;
        }

        //inserting after the first item in the list
        if (this.head.value == itemToInsertAfter) {
            let nodeAfterNewNode = this.head.next;
            this.head.next = new _Node(newItem, nodeAfterNewNode);
            return;
        }

        // Start at the head
        let currNode = this.head;
        // Keep track of next
        let nextNode = this.head;

        while (currNode !== null && currNode.value !== itemToInsertAfter) {
            console.log(currNode)
            // Save the next node
            currNode = currNode.next;
            nextNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let newNode = new _Node(newItem);
        newNode.next = nextNode;
        currNode.next = newNode;
    }

    insertAt(newItem, position) {
        // If the list is empty
        if (!this.head) {
            return null;
        }

        //inserting at the first item in the list
        if (position === 1) {
            this.insertFirst(newItem);
            return;
        }

        //start count at one for the first item in the list
        let count = 1;
        let currNode = this.head;
        let previousNode = this.head;

        //keep traversing while there are items and the count isnt the position
        while (currNode !== null && count !== position) {
            previousNode = currNode;
            currNode = currNode.next;
            //increase the count for each item in the list
            count++;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let newNode = new _Node(newItem);
        newNode.next = currNode;
        previousNode.next = newNode;
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

//5. sort linked list using merge
let data = [30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

function main(){
    const linkedL = new linkedList()
    //linkedL.insertFirst(3)
    data.forEach(item => linkedL.insertLast(item))

    mergeSort(linkedL)
    return linkedL
}
//merge sort
function mergeData(left, right, array){
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++]
        }
    }
    for(let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }

    for(let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

function getLinkedListLength(list){
    let ptr = list.head
    let count = 2;

    while(ptr.next){
        count = count + 1
        ptr = ptr.next
    }
    return count;
}

function mergeSort(list) {
    const length = getLinkedListLength(list)
    console.log(length)

    if (length <= 1) {
        return list;
    }

    const middle = Math.floor(length / 2);

    //https://www.youtube.com/watch?v=KB31cbIqRPs
    // let left = array.slice(0, middle);
    // let right = array.slice(middle, array.length);

    // left = mergeSort(left);
    // right = mergeSort(right);
    //return mergeData(left, right, array);
}

//console.log(newData)


console.log(main())
