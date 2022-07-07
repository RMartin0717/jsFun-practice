const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      }
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // `this` will reference the global window object because
    // [the ES6 function, fly, is declared on the global window object.]
    // With ES6 functions, the value of `this` is set
    // upon declartion rather than upon invocation.
    // If this had been written as a traditional ES5 function,
    // `this` would instead point to [the ship instance of SpaceProbe object]
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }

    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // `this` will reference the global window object because
    // fn is a function that exists in the global window object
    // not in an object literal or class
    // so when we call it from the global window object,
    // this points to the global window object
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Because ES5 functions set the value of this upon invocation
    // the "this" will be bound to el, specifically when it is clicked on
    // and car.getInfo is called
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){

        const innerFunction = function() {
          console.log(this.breed);
        };

        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // "this" will be bound to the global window object because
    // breed is assigned to dog.getBreed() which contains
    // the ES5 anonymous function containing the ES5 function, innerFuction
    // and because breed is called on the global window object,
    // and the value of "this"  is set upon invocation,
    // the value of "this" will be on the global window object
    // where the invocation of the ES5 functions happens
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // The value of 'this' will be the global window object because
    // fn() is an ES6 function, meaning the value of 'this' will be
    // set upon declaration and the value of 'this' will be inherited
    // from the code that contains the function
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // The value of 'this' will be an instance of the Hero class because
    // storm.identifyHero() is an ES5 function, so 'this' is bound
    // upon invocation of the function, which happens on an instance
    // of Hero
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // With ES6 arrow functions, 'this' is lexically bound
    // (uses 'this' from the code that contains the arrow function)
    // In ES5 functions, 'this' is bound to different values based on
    // context in which it is called
    // for a setTimeout function, a .bind(this) would be needed
    // in order to help pass the context into the function.
    // Without this context, 'this' binds to the parent scope
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => {
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Because obj.method() invokes the method that assigns obj.arrowFunction to an arrow function
    // and the value of 'this' is set upon declaration for
    // ES6 arrow functions and arrow functions use 'this' from
    // the code containing the function,
    // the value of 'this' is obj
  },

  exerciseI() {
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment.
  },

  exerciseK() {
    var store = {
      fruit: 'grapes',
      sellMe: function() {
        return this.fruit;
      }
    };

    // What is the value of `this` when we call store.sellMe()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment.
  },

  exerciseL() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        var _this = this;

        setTimeout(function() {
          console.log('Your dog is a ' + _this.breed);
        });
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    const robert = {
      name: 'Bobo',
      occupation: 'instructor'
    };

    const william = {
      name: 'will',
      occupation: 'instructor'
    };

    function makeBirdNoise() {
      console.log('My name is ' + this.name + ' ... caw! caw!');
    }

    // What is the value of `this` when we call makeBirdNoise.call(robert);
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    class Bird {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      delayNoise() {
        setTimeout(this.makeNoise.bind(this), 1000);
      }

      makeNoise() {
        console.log('caw, caw');
      }
    }

    var firstBird = new Bird('Calvin', 'budgie');

    // What is the value of `this` when we call firstBird.delayNoise();
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    const button = document.getElementById('submit');

    button.addEventListener('click', () => {
      console.log(this);
      this.classList.toggle('on');
    });

    // What is the value of `this` when a user clicks on our button element and the callback is triggered?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    const child = {
      totalScreams : 4,
      scream: () => {
        this.totalScreams++;
      }
    };

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // What is the value of `this` when we call child.scream();
    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = context;
