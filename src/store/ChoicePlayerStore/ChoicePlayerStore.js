import { makeObservable, observable, action} from 'mobx';

class ChoicePlayerStore {
    constructor() {
        makeObservable(this, {
            players: observable,

            setDataPlayers: action.bound,
            changePlayer: action.bound
        });
    }

    players = {
        0: {
            type: 'active',
            id: 12521,
            name: 'LEECOM PANY',
            lvl: 1,
            fraction: 'CityHall',
            card: '2074991',
            cash: '2074991',
            condition: {
                food: 50,
                water: 50,
                health: 50,
                endurance: 50,
            },
        },
        1: {
            type: null,
        },
        2: {
            type: 'donate',
        },
    }

    setDataPlayers(obj) {
        this.players = obj;
    }

    changePlayer(obj) {
        this.players[obj.slot] = obj.data;
    }
}

export default new ChoicePlayerStore();