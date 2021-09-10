import { useState } from 'react';

import kelvin from './assets/kelvin-costa.png';

function UserCard({ picture, name, username, followers, following}) {
  const [ message, setMessage ] = useState('seguir');

  function changeFollowMessage() {
    const newMessage = message === 'seguir' ? 'seguindo' : 'seguir';
    setMessage(newMessage);
  }

  return (
    <div className='container'>
      <div className='card'>
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <span className='username'>
          {username}
        </span>
        <span className='stats'>
          {followers} seguidores <br/>
          {following} seguindo
        </span>
      </div>

      <button onClick={changeFollowMessage}
        className={message === 'seguir' ? 'follow-btn' : 'followin-btn'}>
        {message}
      </button>
    </div>
  )
}

function App() {
  const user = [
    {
      id: 1,
      name: 'Kelvin Costa',
      picture: kelvin,
      username: '@costa',
      followers: 140,
      following: 207
    }
  ]

  return (
    <div className='App'>
      {user.map(user => {
        return (
          <UserCard 
            key = {user.id}
            {...user}
            btnMessage='seguir'
          />
        )
      })}
    </div>
  );
}

export default App;
