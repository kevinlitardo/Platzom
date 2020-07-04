# Platzom

Platzom es un idioma inventado para el curso de fundamentos de JS de Platzi

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si inicia con "z" se le añade "pe" al final
- Si la palabra tiene 10 o más letras llevara cun guion en la mitad
- Si la palabra original es un palindromo se intercalan mayusculas y minusculas y nada ams cuenta


## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

console.log(platzom('zarpar')) 
console.log(platzom('programar'))
console.log(platzom('zorro')) 
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))  
```

## Créditos
-[Ricqrdo] (https://github.com/Ricqrdo)

## Licencia

[MIT] (https://opensource.org/licenses/MIT)