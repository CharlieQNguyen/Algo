const chat = "first try";

function printer(string) {
    // in == index, of == value
    for (let char of string) {
        console.log(char);
    }
}

function printer2(string) {
    for (let i = 0; i < string.length; i++){
        console.log(string[i]);
    }

    console.log(i + " is the last index");
}

function printer3(string) {
    let index = 0;
    let hash = {};

    for (; index < string.length; ++index){
        if(hash[string[index]] !== undefined){
            continue;
        }
        hash[string[index]] = 0;
        console.log(string[index]);
    }

    console.log(index + " is the last index");
}

function printer4(string) {
    let index = 0; //default start
    let hash = {};

    while(index < string.length) { // condition
        if(hash[string[index]] !== undefined){
            index++; 
            continue;
        }
        hash[string[index]] = 0;
        console.log(string[index]); // work
        index++; // iteration
    }

    console.log(index + " is the last index");
}

function printer5(string, index = 0) {
    // is condition complete return or break out
    if(index >= string.length || index < 0) {
        return;
    }
    
    // work
    console.log(string[index]);

    // iteration
    index++;
    // recursive Call
    printer5(string, index); 
    

}

printer5(chat);