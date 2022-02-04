const sortArray = function(arr) {
    this.originalArray = arr;
    this.getSortedArray = function() {
        return this.originalArray.sort();
    }
}