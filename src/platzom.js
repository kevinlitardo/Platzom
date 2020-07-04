export default function platzom (str){
          let translation = str
          
          // Si la palabra termina en "ar", se le quitan esos dos caracteres
          if (str.toLowerCase().endsWith('ar')) {
            translation = str.slice(0, -2) //slice corta caracteres en strings, empieza desde el cero y corta 2 desde el final con el "-2"
          }

          // Si inicia con "z" se le añade "pe" al final
          if (str.toLowerCase().startsWith('z')) {
            translation += 'pe';
          }

          // Si la palabra tiene 10 o más letras llevara cun guion en la mitad
          const lenght = translation.length;
          if (lenght >= 10){
            const firsHalf = translation.slice(0, Math.round(lenght / 2)); //parte a la mitad desde el inicio la palabra
            const lastHalf = translation.slice(Math.round(lenght / 2)); //parte a la palabra desde la mitad hasta el final
            translation = `${firsHalf}-${lastHalf}`
          }

          // Si la palabra original es un palindromo se intercalan mayusculas y minusculas y nada mas cuenta
          const reverse = str => str.split('').reverse().join('') // split divide y convierte en array, con '' al ser string lo hace por letras, reverse solo sirve con arrays y lo pone al revés, y join lo convierte en string y con ('') en una sola palabra - PROBAR TODO EN CONSOLA PARA ENTENDER MEJOR
          
          function lowerUpper (str){
            const length = str.lenght
            let translation = '' //porque va a ser una nueva variable, vamos a ir sumando caracteres a esta string en mayuscula o minuscula
            let upperCase = true

            for (let i = 0; i < lenght; i++){
              const character = str.charAt(i)
              translation += upperCase ? character.toUpperCase() : character.toLowerCase()
              upperCase = !upperCase
            }
            
            return translation
          }

          if (str == reverse(str)){
            return lowerUpper(str)
          }
          return translation
        } 