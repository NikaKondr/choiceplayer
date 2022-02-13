export const mp = { // Перед билдом удалите этот файл и его импорты!
    trigger: (eventTarget, eventName, ...args) => {
        const event = `server::${eventTarget}:${eventName}`;
        console.log(`emitted: ${event}\n`, ...args) 
    }
}