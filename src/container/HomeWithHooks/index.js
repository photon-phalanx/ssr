import React from 'react'
import Header from '../../components/Header'
import homeStoreCreator from './store'

const Home = () => {

  const [state, dispatch] = homeStoreCreator({
    id: Math.random(),
    news: Math.random()
  })

  return (
    <div>
      <Header/>
      <ul>
        {state.newsList.map(v => (
          <li key={v.id}>{v.news}</li>
        ))}
      </ul>
      <button onClick={() => {dispatch({
            type: 'test',
            payload: {
              id: Math.random(),
              news: Math.random()
            }
          })}}>button</button>
    </div>
  )
}

export default Home
