// делаем пробел между числами 3 000 30 000 300 000 и тд
export default {
    methods: {
        changeValueAddspaceBetweenFigura(valueString) {
            let strValue = valueString;

            if (strValue.length > 3) {
                // строку перевожу в массив
                const arrayValue = strValue.split("");
                // вставляю после 3 и 6 элемента массива( с конца ) - вставляю пробел
                arrayValue.splice(strValue.length - 3, 0, " ");

                if (strValue.length > 6) {
                    arrayValue.splice(strValue.length - 6, 0, " ");
                }

                // возвращаю строку
                strValue = arrayValue.join("");
                return strValue;
            }
            // число или строка
            return valueString;
        },
    },
};