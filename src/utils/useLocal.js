import * as React from 'react';

export const useLocal = (creator) => {
    const container = React.useRef(null);

    if (container.current === null) {
        container.current = creator();
    }

    return container.current;
}

export const useLocalStore = (creator) => {
    const store = useLocal(creator);

    React.useEffect(() => {
        return () => store.destroy();
    }, [store]);

    return store;
}