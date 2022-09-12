import React, { useState, useEffect } from 'react';
// import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Online from './Online';
import Offline from './Offline';

const ConnectionStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    type: 'online',
  });

  useEffect(() => {
    const networkStatusChange = ({ type }) => {
      setNetworkStatus({ type });
    };

    window.addEventListener('offline', networkStatusChange);
    window.addEventListener('online', networkStatusChange);

    return () => {
      window.removeEventListener('offline', networkStatusChange);
      window.removeEventListener('online', networkStatusChange);
    };
  }, [networkStatus.type]);

  return networkStatus.type === 'online' ? <Online /> : <Offline />;
};

export default ConnectionStatus;

// компонента отображает текущий статус cоединения с интернетом(online / offline)
// По умолчанию - online

// Чтобы отловить изменение статуса, используйте
// события online / offline у объекта window

// При offline статусе цвет обводки (border) должен быть красным
// (добавляйте класс .status_offline)

// Не забудьте отписаться от событий перед тем, как компонента удалится со страницы,
// чтобы избежать утечек памяти

/*
<div class="status status_offline">Offline</div>
*/
