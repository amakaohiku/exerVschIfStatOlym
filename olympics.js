if (5>2) {
    console.log('is greater than')
};

if ('cat' === 3) {
    console.log('is the length')
};

if ('cat' === 'dog') {
    console.log('it is the same')
} else {
    console.log('not the same')
};

// Bronze

var person = {
     name: 'Bobby',
     age: 12
} 
if (person.age >= 18) {
     console.log(person.name + 'is allowed to go to the movie')

}  else {
     console.log(person.name + ' is not allowed to go to the movie')
    } ;


if (person.name[0] === 'B') {
     console.log(person.name + ' is allowed to go to the movie')
   
}  else {
        console.log(person.name + ' is not allowed to go to the movie')
    } ;

if (person.age >= 18 && person.name[0] === 'B') {
    console.log(person.name + ' is allowed to go to the movie')
      
}  else {
    console.log(person.name + ' is not allowed to go to the movie')
    };

 // Silver

if ('1' === 1) {
    console.log('Strict')
} else if ('1' == 1) {
    console.log('Abtract');
} else {
    console.log('not equal at all')
    };

    // Gold
if (typeof 'dog' === 'string'); {
    console.log('it is a string')
};

if (typeof true === 'boolean'); {
    console.log('it is true')
};
if (typeof 'cat' != 'undefined'); {
    console.log('undefined')

}

if ('s' > 12) {
    console.log('true')
} else {
    console.log('false')
};

var myNum = 10 

for(var i = 0; i < 10; i++); {
    if (myNum% 2 === 0 ){
        console.log('even')
    }
} 
