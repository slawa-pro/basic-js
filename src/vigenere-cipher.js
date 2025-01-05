const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Both "message" and "key" are required!');
    }

    let result = [];
    let keyIndex = 0;
    key = key.toUpperCase(); // Преобразуем ключ в верхний регистр

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/i)) { // Проверяем только буквы
        const shift = (message[i].toUpperCase().charCodeAt(0) + key[keyIndex].charCodeAt(0)) % 26;
        result.push(String.fromCharCode(shift + 65));
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result.push(message[i]); // Не буквы добавляем без изменений
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Both "message" and "key" are required!');
    }

    let result = [];
    let keyIndex = 0;
    key = key.toUpperCase(); // Преобразуем ключ в верхний регистр

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/i)) { // Проверяем только буквы
        const shift = (message[i].charCodeAt(0) - key[keyIndex].charCodeAt(0) + 26) % 26;
        result.push(String.fromCharCode(shift + 65));
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result.push(message[i]); // Не буквы добавляем без изменений
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
