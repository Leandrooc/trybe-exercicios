const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.
   ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
order.name = 'Luiz Silva';
order.order.pizza.marguerita.price = 20;
console.log(`Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é 
${order.order.pizza.marguerita.price + order.order.drinks.coke.price + order.order.pizza.pepperoni.price}`)
};

orderModifier(order);

// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addturn = (obj,key,value) =>  obj[key] = value;
 
addturn(lesson2,'turno', 'noite')
console.log(lesson2)

const listkeys = (obj) => {console.log(Object.keys(obj))}
listkeys(lesson1)

const listkeyslength = (obj) => {console.log(Object.keys(obj).length)}
listkeyslength(lesson1)

const objvalue = (obj) => {console.log(Object.values(obj))}
objvalue(lesson1)

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons)

let estudantes = 0;

const aulas = () => {
  let entries = Object.entries(allLessons)
  for(property in entries) {
    estudantes = estudantes + entries[property][1].numeroEstudantes
  }
  console.log(estudantes)
}
aulas();

//

const getValueByNumber = (obj, position) => console.log(Object.values(obj)[position]);

getValueByNumber(lesson1, 0)


//

const verifyPair = (obj,name,keyvalue) => {
  if(obj[name] === keyvalue) {
    console.log(true)
  } else {
    console.log(false)
  }
}

verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');

// Bônus

let students = 0;

const lessons = () => {
  let entries = Object.entries(allLessons)
  for(property in entries) {
    if(entries[property][1].materia === 'Matemática') {
      students = students + entries[property][1].numeroEstudantes
    }
  }
  console.log(`${students} Estudantes assistiram ás aulas de matemática`)
}

lessons();

// Bônus parte 2 
let students1 = 0;
let aulasd = [];

const createReport = (obj, professor) => {

  let entries = Object.entries(obj)
  for(property in entries) {
    if(entries[property][1].professor === professor) {
      students1 = students1 + entries[property][1].numeroEstudantes
      aulasd.push(entries[property][1].materia)
    }
  }

console.log(
    { 
    professor: `${professor}`,
    aulas: aulasd,
    estudantes: `${students1}`,
  })
  console.log(aulasd)
  /*
  console.log({teste: [2,3,'sds','s']}) */

}

createReport(allLessons, 'Maria Clara');