import * as React         from 'react';
import EventManager       from './utils/EventManger';
import { useLocalStore }  from './utils/useLocal'

import ChoicePlayer       from './components/ChoicePlayer';

import ChoicePlayerStore  from './store/ChoicePlayerStore';



function App() {
  const choicePlayerStore = useLocalStore(() => new ChoicePlayerStore());

  const [component, setComponent] = React.useState(null); // для отображение введите 'choicePlayer'

  React.useEffect(() => {
    EventManager.addHandler('app', 'setComponent', component => setComponent(component));

    return () => EventManager.removeHandler('app');
 },[])

  return (
    <div className="app">
      {component === 'choicePlayer' && <ChoicePlayer store={choicePlayerStore}/>} 
    </div>
  );
}

export default App;
