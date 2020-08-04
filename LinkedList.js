//Walk through the linked list code in the curriculum and understand it well.
//Then write a linked list class and its core functions
//(insertFirst, insertLast, remove, find) from scratch.

// Create Node of LinkedList
function Node(data) {
    this.node = data;
    this.next = null;
}

// To initialize a linkedlist
function LinkedList(list) {
    this.head = list || null;
}

// Function to insert The new Node into the linkedList
LinkedList.prototype.insert = function (data) {
    // Check if the linked list is empty
    // so insert first node and lead head
    // points to generic node
    if (this.head === null) this.head = new Node(data);
    else {
        // If linked list is not empty, insert the node
        // at the end of the linked list
        let list = this.head;
        while (list.next) {
            list = list.next;
        }

        // Now here list pointer points to last
        // node let’s insert out new node in it
        list.next = new Node(data);
    }
};

// Function to print linkedList
LinkedList.prototype.iterate = function () {
    // First we will check whether out
    // linked list is empty or node
    if (this.head === null) return null;

    // If linked list is not empty we will
    // iterate from each Node and prints
    // it’s value store in “data” property

    let list = this.head;

    // we will iterate until our list variable
    // contains the “Next” value of the last Node
    // i.e-> null
    while (list) {
        document.write(list.node);
        if (list.next) document.write(' -> ');
        list = list.next;
    }
};

// Function to mergesort a linked list
LinkedList.prototype.mergeSort = function (list) {
    if (list.next === null) return list;

    let count = 0;
    let countList = list;
    let leftPart = list;
    let leftPointer = list;
    let rightPart = null;
    let rightPointer = null;

    // Counting the nodes in the received linkedlist
    while (countList.next !== null) {
        count++;
        countList = countList.next;
    }

    // counting the mid of the linked list
    let mid = Math.floor(count / 2);
    let count2 = 0;

    // separating the left and right part with
    // respect to mid node in tke linked list
    while (count2 < mid) {
        count2++;
        leftPointer = leftPointer.next;
    }

    rightPart = new LinkedList(leftPointer.next);
    leftPointer.next = null;

    // Here are two linked list which
    // contains the left most nodes and right
    // most nodes of the mid node
    return this._mergeSort(this.mergeSort(leftPart), this.mergeSort(rightPart.head));
};

// Merging both lists in sorted manner
LinkedList.prototype._mergeSort = function (left, right) {
    // Create a new empty linked list
    let result = new LinkedList();

    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;

    // If true then add left most node value in result,
    // increment left pointer else do the same in
    // right linked list.
    // This loop will be executed until pointer's of
    // a left node or right node reached null
    while (pointerLeft && pointerRight) {
        let tempNode = null;

        // Check if the right node's value is greater than
        // left node's value
        if (pointerLeft.node > pointerRight.node) {
            tempNode = pointerRight.node;
            pointerRight = pointerRight.next;
        } else {
            tempNode = pointerLeft.node;
            pointerLeft = pointerLeft.next;
        }

        if (result.head == null) {
            result.head = new Node(tempNode);
            resultPointer = result.head;
        } else {
            resultPointer.next = new Node(tempNode);
            resultPointer = resultPointer.next;
        }
    }

    // Add the remaining elements in the last of resultant
    // linked list
    resultPointer.next = pointerLeft;
    while (resultPointer.next) resultPointer = resultPointer.next;

    resultPointer.next = pointerRight;

    // Result is  the new sorted linked list
    return result.head;
};

//5. sort linked list using merge
let data = [
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5,
];

//console.log(newData)
function main() {
    let linkedL = new LinkedList();
    data.forEach(item => linkedL.insert(item));

    linkedL = LinkedList.prototype.mergeSort(linkedL.head);
    return linkedL;
}

//let data = [5,1,3,6,2,8,7,4]
console.log(main());
