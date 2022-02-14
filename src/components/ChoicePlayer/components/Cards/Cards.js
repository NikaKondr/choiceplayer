import * as React   from 'react';
import cn           from 'classnames';
import { entries }  from 'mobx';
import EventManager from '../../../../utils/EventManger'

import './Cards.scss'

const Cards = ({el, id, setCurrentAccount, currentAccount}) => {

    const names = React.useMemo(() => ({
        food: 'Еда',
        water: 'Вода',
        health: 'Здоровье',
        endurance: 'Выносливость',
    }),[])

    return <div className='choice-player-card' onClick={() => setCurrentAccount(id)}>
        {el.type === 'active' &&
            <div className='choice-player-card-container'>
                <div className='choice-player-card-container__image'></div>

                <div className={cn('choice-player-card-prevent', currentAccount === id && 'choice-player-card-prevent_disabled')}>
                    <div className='choice-player-card-prevent__name'>{el.name}</div>
                    <div className='choice-player-card-prevent__desc'>подробнее</div>
                </div>
                <div className={cn('choice-player-card-container-hide', currentAccount === id && 'choice-player-card-container-hide_active')}>
                    <div className='choice-player-card-container-level'>
                        <div className='choice-player-card-container-level-number'>{el.lvl}
                            <div className='choice-player-card-container-level-number__text'>level</div>
                        </div>
                    </div>
                    <div className='choice-player-card-container-box'>
                        <div className='choice-player-card-container-box__name'>{el.name}</div>
                        <div className='choice-player-card-container-box-column'>
                            <div className='choice-player-card-container-box-column__title'>Фракция</div>
                            <div className='choice-player-card-container-box-column__text'>{el.fraction}</div>
                        </div>
                        <div className='choice-player-card-container-box-row'>
                            <div className='choice-player-card-container-box-column'>
                                <div className='choice-player-card-container-box-column__title'>На счету</div>
                                <div className='choice-player-card-container-box-column__text'>$ {el.card}</div>
                            </div>
                            <div className='choice-player-card-container-box-column'>
                                <div className='choice-player-card-container-box-column__title'>Наличные</div>
                                <div className='choice-player-card-container-box-column__text'>$ {el.cash}</div>
                            </div>
                        </div>
                        <div className='choice-player-card-container-box-grid'>
                            {entries(el.condition).map((entry) => {
                                const key = entry[0];
                                const el = entry[1];

                                return <div key={key} className='choice-player-card-container-box-grid-column'>
                                    <div className='choice-player-card-container-box-grid-column-title'>
                                        <div className='choice-player-card-container-box-grid-column-title__name'>{names[key]}</div>
                                        <div className='choice-player-card-container-box-grid-column-title__number'>{el}%</div>
                                    </div>
                                    <div className='choice-player-card-container-box-grid-column-line' style={{'--precent': el + '%'}}></div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='choice-player-card-container-footer'>
                        <div className='choice-player-card-container-footer__choice' onClick={() => EventManager.trigger('choicePlayer', 'selectPlayer', {slot: id, id: el.id})}>Выбрать</div>
                        <div className='choice-player-card-container-footer__delete' onClick={() => EventManager.trigger('choicePlayer', 'deletePlayer',{slot: id, id: el.id})}>Удалить</div>
                    </div>
                </div>
            </div>
        }
        {(el.type === null || el.type === 'donate') &&
            <div className='choice-player-card-null'>
                <div className='choice-player-card-null__img'></div>
                <div className='choice-player-card-null__text'>{el.type === 'donate' ? 'Слот недоступен' : 'Слот пустой'} </div>
                <div className='choice-player-card-null__desc'>{el.type === 'donate' ? 'Чтобы разблокировать дополнительный слот приобретите его в магазине' : 'Нажмите кнопку создать, чтобы перейти в раздел создания персонажа' }</div>
                <div className='choice-player-card-null__button' onClick={() => el.type === 'donate' ? EventManager.trigger('choicePlayer', 'selectDonateSlot', {slot: id}) : EventManager.trigger('choicePlayer', 'createPlayer', {slot: id})}>{el.type === 'donate' ? 'Выбрать' : 'Создать'}</div>
            </div>
        }

    </div>
};

export default React.memo(Cards);