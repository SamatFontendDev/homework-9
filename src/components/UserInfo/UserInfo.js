import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import {getIsLoading, getData} from '../../modules/User'
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const {isLoading, data} = this.props;
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    if (isLoading) return <p>Идет загрузка...</p>
    
    if (!data) return <p>Нет информации о пользователе</p>

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={data.avatar_url} alt={data.login} />
        </div>
        <p>{data.login}</p>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(UserInfo);
