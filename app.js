//quicksort
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}
let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

//console.log(qSort(data))

//merge sort
function merge(left, right, array){
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

function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
}

//console.log(mSort(data));


//bubble sort/sort in place
function bSort(array){
    let swaps = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]){
            swap(array, i, i+1);
            swaps++;
        }
    }

    if(swaps > 0){
        return bSort(array);
    }
    return array
}

//console.log(bSort(data))


// 6. Bucket sort
function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
        var temp = array[i];
        for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    
    return array;
}

function bucketSort(array, min, max, bucket_size) {
    if(array.length < 2) {
        return array
    }
    
    bucket_size = bucket_size || 5
    let bucket_count = Math.floor((max - min) / bucket_size + 1) 
    let allBuckets = new Array(bucket_count)
    
    for (let i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }

    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - min) /bucket_size)].push(currentVal);
    })

    array.length = 0;

    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        })
    })
    return array
}

let dataForBucket = [3,7,2,12,17,38,29,31,22,11,34,1]
//console.log(bucketSort(dataForBucket, 1, 38))

// 8. Sorting books
let bookData = ['Time and How to Spend it', 'Walking Each Other Home', 'Finding Your Element', 'What Color is Your Parachute', 
    'What I Know For Sure', 'The 4-Hour Workweek', 'Getting Things Done', 'Theological Political Treatise',
    'Through Painted Deserts', 'The Four', 'Animal Farm', 'The Design of Everyday Things',
    'Structures', 'Why Buildings Fall Down', 'Zero to One', 'Engineer to Win',
    'Set Phasers on Stun', 'An Astronauts Guide to Life', 'Thing Explainer', 'Creativity Inc']

//console.log(qSort(bookData))
//console.log(mSort(bookData))

//think through sorting set of physical books -> what algorithm does that resemble