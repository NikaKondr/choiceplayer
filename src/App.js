import * as React         from 'react';
import EventManager       from './utils/EventManger';

import ChoicePlayer       from './components/ChoicePlayer';

import ChoicePlayerStore  from './store/ChoicePlayerStore';

function App() {
	const choicePlayerStore = ChoicePlayerStore;

	const [component, setComponent] = React.useState(null); // для отображение введите 'choicePlayer'

	React.useEffect(() => {
		EventManager.addHandler('app', value => {
			if (value.type === 'setComponent') {
			setComponent(value.data);
			} else return;
		});

		return () => EventManager.removeHandler('app');
	},[])

	return (
		<div className="app">
			{component === 'choicePlayer' && <ChoicePlayer store={choicePlayerStore}/>} 
		</div>
	);
}

export default App;
