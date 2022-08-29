import React from 'react';

// компонента отображает текущий статус cоединения с интернетом(online / offline)
// По умолчанию - online

// При offline статусе цвет обводки (border) должен быть красным
// (добавляйте класс .status_offline)

// Не забудьте отписаться от событий перед тем,
// как компонента удалится со страницы, чтобы избежать утечек памяти

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.checkStatus);
    window.addEventListener('offline', this.checkStatus);
  }

  componentWillUnmount() {
    window.addEventListener('online', this.checkStatus);
    window.addEventListener('offline', this.checkStatus);
  }

  checkStatus = event => {
    this.setState({
      status: event.type,
    });
  };

  render() {
    const statusClass = this.state.status === 'offline' ? 'status_offline' : '';
    return <div className={`status ${statusClass}`}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;

// <div class="status status_offline">Offline</div>;

// Чтобы отловить изменение статуса,
// используйте события online / offline у объекта window

// Чтобы переключаться между online / offline режимами
// воспользоваться специальной настройкой,
// которая находится в инструментах разработчика, вкладка 'Network'.
// Там в первой строке есть селект или чекбокс,
// который поможет переключаться online / offline
