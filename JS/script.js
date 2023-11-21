const container = document.querySelector(".container");

for(let i=1; i<=100; i++){
 
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    

    if( i % 3 === 0 && i % 5 === 0 ){
        
        square.classList.add("fizz-buzz");
        square.append("FizzBuzz")

    } else if ( i % 5 === 0){

        square.classList.add("buzz");
        square.append("Buzz")

    } else if ( i % 3 === 0){

        square.classList.add("fizz");
        square.append("Fizz")

    }else {
        square.append(i);
    }


}