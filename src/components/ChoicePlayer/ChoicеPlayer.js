import * as React    from 'react';
import { entries }   from 'mobx';
import { observer }  from 'mobx-react-lite';
import EventManager  from '../../utils/EventManger';

import Cards         from './components/Cards'

import './ChoicеPlayer.scss'

const ChoicеPlayer = ({store}) => {
    const [currentAccount, setCurrentAccount] = React.useState(null);

    const screen = React.useRef(null);

    React.useEffect(() => {
        const timeout = setTimeout(() => screen.current.classList.add('choice-player_active'), 200);

		return () => clearTimeout(timeout);
    },[])

    React.useEffect(() => {
        EventManager.addHandler('choicePlayer', 'setData', obj => store.setDataPlayers(obj));
        EventManager.addHandler('choicePlayer', 'changePlayer', obj => store.changePlayer(obj));

        return () => EventManager.removeHandler('choicePlayer');
     },[store])

    return <div ref={screen}  className='choice-player'>
        {entries(store.players).map((entry) => {
            const id = entry[0];
            const el = entry[1];
            return <Cards key={id} {...{el, id, setCurrentAccount, currentAccount}}/>
        })}
    </div>
};

export default observer(ChoicеPlayer);