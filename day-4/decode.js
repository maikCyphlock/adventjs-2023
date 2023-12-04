/*
Challenge #4: 😵‍💫 Turn the parentheses around.

In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
Notes:

The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
There should not be any parentheses left in the final message.
The maximum nesting level is 2.

*/
/**
 *
 * @param {string} message
 * @returns
 */
export function decode (message) {
  // Si el mensaje no contiene paréntesis, lo devolvemos tal cual
  if (!message.includes('(') || !message.includes(')')) {
    return message
  }

  // Creamos una pila para almacenar los índices de los paréntesis abiertos
  const stack = []

  // Recorremos el mensaje de izquierda a derecha
  for (let i = 0; i < message.length; i++) {
    // Si encontramos un paréntesis abierto, lo agregamos a la pila
    if (message[i] === '(') {
      stack.push(i)
    }
    // Si encontramos un paréntesis cerrado, sacamos el índice del paréntesis abierto correspondiente de la pila
    else if (message[i] === ')') {
      const start = stack.pop()

      // Invertimos la subcadena entre el índice del paréntesis abierto y el índice del paréntesis cerrado
      const reversedSubstring = message.slice(start + 1, i).split('').reverse().join('')

      // Eliminamos los paréntesis y actualizamos el mensaje
      message = message.slice(0, start) + reversedSubstring + message.slice(i + 1)

      // Actualizamos el índice para que apunte al inicio de la subcadena invertida
      i = start
    }
  }

  // Devolvemos el mensaje decodificado
  return message
}

console.log(decode('hola (odnum) perro'))
console.log(decode('(olleh) (dlrow)'))
console.log(decode('sa(u(cla)atn)s'))
