import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {getIsLoading, getData} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const {isLoading, data} = this.props
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    if (isLoading) return <p>Идет загрузка...</p>
    
    if (!data) return <p>Нет информации о подписчиках</p>
    
    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(elem => (
          <div className={styles.follower}>
            <img className={styles.followerImg} src={elem.avatar_url} alt={elem.login} />
            <span className={styles.followerLogin}>{elem.login}</span>
          </div>
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(Followers);
