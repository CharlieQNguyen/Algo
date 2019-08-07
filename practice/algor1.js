//dictionary
let object = {"charlie": "coffee"};
function printKeyandValue(object) {
    for(keys in object){
        console.log(keys, object[keys])
    }
}

printKeyandValue(object)

// reverse arrays

function reverseArray(array) {
    let temp = 0;
    for(let i = 0; i < array.length/2; i++) {
        temp = array[i];
        array[i] = array[array.length -1 - i];
        array[array.length -1 -i] = temp
    }
    console.log(array)
}

let array = [1, 2, 3, 4, 5]
reverseArray(array)

// Singly Link List

function slNode(val) { //node function
    this.val = null;
    this.next = null;
}

function slList() {
    this.head = null;

    this.AddToFront = function(val) {
        let neo = new slNode(val);
            neo.next = this.head;
            this.head = neo;
    }

    this.AddToBack = function(val) {
        runner = this.head
        while(runner){
            if(runner.next == null){
                runner.next = new slNode(val)
                return this.head;
            }
            else{
                runner = runner.next;
            }
        }
    }
}