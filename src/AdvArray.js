// okk
(function () {
   var root = this; // global object. 이거엔 왠만하면 접근하지 않는게 좋다.
   var AdvArray = function (arr) {
      this.set(arr);
   };
   AdvArray.prototype = {
      internal_sort_work: function (leftPos, rightPos, arrLength) {
         let initialLeftPos = leftPos;
         let initialRightPos = rightPos;
         let direction = true;
         let pivot = rightPos;
         while ((leftPos - rightPos) < 0) {
            if (direction) {
               if (this.arr[pivot] < this.arr[leftPos]) {
                  this.swap(pivot, leftPos);
                  pivot = leftPos;
                  rightPos--;
                  direction = !direction;
               } else
                  leftPos++;
            } else {
               if (this.arr[pivot] <= this.arr[rightPos]) {
                  rightPos--;
               } else {
                  this.swap(pivot, rightPos);
                  leftPos++;
                  pivot = rightPos;
                  direction = !direction;
               }
            }
         }
         if (pivot - 1 > initialLeftPos) {
            this.internal_sort_work(initialLeftPos, pivot - 1, arrLength);
         }
         if (pivot + 1 < initialRightPos) {
            this.internal_sort_work(pivot + 1, initialRightPos, arrLength);
         }
      },
      swap: function (el1, el2) {
         let swapedElem = this.arr[el1];
         this.arr[el1] = this.arr[el2];
         this.arr[el2] = swapedElem;
      },
      quick_sort: function () {
         // 배열 수가 엄청 많거나 배열수가 작더라도 수행횟수가 많을때 빠르다
         var length = this.arr.length;
         this.internal_sort_work(0, length - 1, length);
      },
      native_sort: function () {
         // 배열 수가 작거나 수행횟수가 적을때 빠르다
         this.arr.sort(function (a, b) { return a - b; });
      },
      get: function () {
         return this.arr;
      },
      set: function (arr) {
         this.arr = arr;
      },
      get_min: function () {
         // 배열중 가장 작은 수를 가져옴
         try {
            return Math.min.apply(null, this.arr);
         } catch (e) {
            return this.arr.reduce(function (previous, current) {
               return previous > current ? current : previous;
            });
         }
      },
      get_max: function () {
         // 배열중 가장 큰 수를 가져옴
         try {
            return Math.max.apply(null, this.arr);
         } catch (e) {
            return this.arr.reduce(function (previous, current) {
               return previous > current ? previous : current;
            });
         }
      },
   };
   root.AdvArray = AdvArray;
   root.AdvArray.CONST_VALUE = 'hello world';
}).call(this);
