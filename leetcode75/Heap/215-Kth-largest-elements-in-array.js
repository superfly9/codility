/**
 * Medium
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // find the largest element
  let largest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = largest - nums[i];
    hashMap[diff] = (hashMap[diff] || 0) + 1;
  }
  let count = 0;
  let diff = 0;
  while (count < k) {
    count += hashMap[diff] || 0;
    diff++;
  }

  return largest - diff + 1;
};

// sol2)
function Heap() {
  this.root = [];
}

Heap.prototype.heapifyDown = function (parent) {
  let leftInd = this.leftChild(parent);
  let rightInd = this.rightChild(parent);
  let maxHeap = this.root;
  let endindex = maxHeap.length - 1;
  while (leftInd <= endindex) {
    let indexToShift;
    if (rightInd <= endindex && maxHeap[rightInd] > maxHeap[leftInd]) {
      indexToShift = rightInd;
    } else {
      indexToShift = leftInd;
    }
    if (maxHeap[parent] < maxHeap[indexToShift]) {
      [maxHeap[parent], maxHeap[indexToShift]] = [
        maxHeap[indexToShift],
        maxHeap[parent],
      ];
      parent = indexToShift;
      leftInd = this.leftChild(parent);
      rightInd = this.rightChild(parent);
    } else {
      return;
    }
  }
};

Heap.prototype.buildheap = function (arr) {
  this.root = arr;
  let lastparent = this.parent(this.root.length - 1);
  for (let i = lastparent; i >= 0; i--) {
    this.heapifyDown(i);
  }
};

Heap.prototype.parent = function (i) {
  return Math.floor((i - 1) / 2);
};
Heap.prototype.leftChild = function (i) {
  return 2 * i + 1;
};

Heap.prototype.rightChild = function (i) {
  return 2 * i + 2;
};

Heap.prototype.remove = function () {
  const heap = this.root;
  [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
  heap.pop();
  this.heapifyDown(0);
};

Heap.prototype.max = function () {
  return this.root[0];
};
var findKthLargest = function (nums, k) {
  let maxHeap = new Heap();
  maxHeap.buildheap(nums);
  for (let i = 0; i < k - 1; i++) {
    maxHeap.remove();
  }
  return maxHeap.max();
};

// sol3)

var findKthLargest = function (nums, k) {
  // Initialize an empty heap
  let kNumbersMinHeap = new MinHeap();

  // Add first k elements to the heap
  for (var i = 0; i < k; i++) {
    kNumbersMinHeap.push(nums[i]);
  }

  // Loop through the remaining elements in nums
  for (var i = k; i < nums.length; i++) {
    // Compare the current element with the minimum
    // element (root) of the min-heap
    if (nums[i] > kNumbersMinHeap.peek()) {
      // Remove the smallest element
      kNumbersMinHeap.pop();
      // Add the current element
      kNumbersMinHeap.push(nums[i]);
    }
  }
  // The root of the heap has the Kth largest element
  return kNumbersMinHeap.peek();
};

class MinHeap {
  constructor(data = new Array()) {
    this.data = data;
    this.compareVal = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  push(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.compareVal(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}
