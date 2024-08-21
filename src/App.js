
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Test from './test'

const App = () => {
  const {onToggleButton, tg} = useTelegram()
  useEffect( () => {
    tg.ready()
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Test/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
