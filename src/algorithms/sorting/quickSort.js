export function quickSort(arr, setArray, speed, start = 0, end = arr.length - 1) {
    if (start < end) {
      let pivotIndex = partition(arr, start, end);
      setArray([...arr]);

      setTimeout(() => {
        quickSort(arr, setArray, speed, start, pivotIndex - 1);
        quickSort(arr, setArray, speed, pivotIndex + 1, end);
      }, speed);
    }
  }

  function partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }
