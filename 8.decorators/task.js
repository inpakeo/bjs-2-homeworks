//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args)); // Генерируем хеш на основе аргументов

        let objectInCache = cache.find(item => item.hash === hash);

        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }

        let result = func(...args);
        cache.push({ hash, value: result });

        if (cache.length > 5) {
            cache.shift(); // Удаляем самый старый элемент из кеша
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    function wrapper(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        if (!timeoutId) {
            func(...args);
            wrapper.count++;
        }

        timeoutId = setTimeout(() => {
            func(...args)
            wrapper.count++;
        }, delay);

        wrapper.allCount++;
    }
    return wrapper;
}
