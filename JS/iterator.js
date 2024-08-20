function vehiclesIterator(values){
    let nextIndex = 0;

    return {
        next : function(){
            if (nextIndex < values.lenghth){
                return{
                    value : values[nextIndex++],
                    done : false
                }
            }
            else{
                return{
                    done :true
                }
            }
        }
    }
}




const myArray = [ 'FZs', 'Bullet', 'Duke','R15'];
console.log(myArray);


const bikes = vehiclesIterator(myArray);
console.log(bikes.next().value);
console.log(bikes.next().value);
console.log(bikes.next().value);
console.log(bikes.next().value);
console.log(bikes.next().value);







/*function myIterable() {
    let counter = 0;
    return {
        next:function(){
            if (counter < 5) {
            counter++;
            return { done: false, value: counter };
            } else {
            return { done: true, value: undefined };
          }
    }
}
}*/