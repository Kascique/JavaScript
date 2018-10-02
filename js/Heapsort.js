function heapIf(num_arr, size, n){
  var largest = n;
  var leftChild = 2 * n + 1;
  var rightChild = 2 * n + 2;
  
  if(leftChild < size && num_arr[leftChild] > num_arr[largest])
     largest = leftChild;
  
  if(rightChild < size && num_arr[rightChild] > num_arr[largest])
    largest = rightChild;
  
  if(largest != n){
    num_arr[n] = [num_arr[largest], num_arr[largest] = num_arr[n]][0]; 
    heapIf(num_arr, size, largest);
  }
}

function heapSort(num_arr, s){
  for(var c = s / 2 - 1; c >= 0; c--)
    heapIf(num_arr, s, c);
  
  for(var c = s - 1; c >= 0; c--){
    num_arr[0] = [num_arr[c], num_arr[c] = num_arr[0]][0];
    heapIf(num_arr, c, 0);
  } 
}

function mainFunc(){
  var num_arr = [12, 33, 10, 45, 3, 15];
  var size = num_arr.length;
  
  heapSort(num_arr, size);
  document.write("Sorting completed: ");
  document.write(num_arr);
}

mainFunc();
