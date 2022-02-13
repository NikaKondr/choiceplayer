Окно выбора персонажа

  

Дизайн взят с [ragemp.pro](https://ragemp.pro/resources/dizajn-interfejsa-vybor-personazha-bez-verstki-dlja-servera-rage-multiplayer.320/)

  

Автор дизайна: **[Keer](https://ragemp.pro/members/keer.4816/)**  *(спасибо большое)*

  

Разработка: discord: **peach#5569**

  

### `npm i`

  

Перед запуском проекта вам нужно установить модули.

  

### `npm start`

  

После установки модулей запустите проект.

  

### `npm run build`

  

Для того чтобы сбилдить проект.

  

# Ивенты

  

## Сервер -> Клиент

  

### Отобразить интерфейс

``('app', 'setComponent', 'choicePlayer')``

  

### Отправка списка слотов

  

``('choicePlayer', 'setData', obj)``

**Хранение данных**

```js
data= {
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
		type: null, // Пустой слот
	},

	2: {
		type: 'donate', // Донатный слот
	},
}
```

  ### Изменение одного слота с персонажем

``('choicePlayer', 'changePlayer', obj)``

**Хранение данных**

```js
data = {
	slot: 0, // 0, 1, 2
	data: {
		type: null;
		...
	}
}
```
  
  
  

## Клиент-> Сервер

  

### Выбор персонажа

``('choicePlayer', 'selectPlayer', {slot: '0', id: 1234})``

  

### Удаление персонажа

``('choicePlayer', 'deletePlayer', {slot: '0', id: 1234})``

  

### Создание персонажа

``('choicePlayer', 'createPlayer', {slot: '0'})``

### Выбор донатного слота

``('choicePlayer', 'selectDonateSlot', {slot: '0'})``

# Примечание

Если вы захотите использовать это на своем сервере, то перед билдом вам нужно удалить файл **mp.js**

и всего его импорты.


![enter image description here](https://cdn.discordapp.com/attachments/870735155176800307/942564404917071872/unknown.png)

![enter image description here](https://cdn.discordapp.com/attachments/870735155176800307/942564454313381968/unknown.png)
