export function bubbleSort(arr, setArray, speed) {
    let len = arr.length;
    let i = len - 1;
    let j = 0;

    function sort() {
      if (i > 0) {
        if (j < i) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            setArray([...arr]);
          }
          j++;
        } else {
          j = 0;
          i--;
        }
        setTimeout(sort, speed);
      }
    }

    sort();
  }
