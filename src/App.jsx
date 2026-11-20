
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import MenuCard from './components/MenuCard'
import Visual from './components/Visual'
function App() {
  return (
  <main>
  <Header logo={'🥐 bread day'}/>
  <Visual 
  sub={'매일 아침 7시, 갓 구운 빵'}
  title={'오늘도 따뜻한 빵 한 조각'}
  />
  <Menu/>
  <Footer address={'서울시 중강루 상봉동 빱굽는길'}
  hours={'07:00~20:00 (월요일은 휴무)'}
  />
  </main >
  )
}
export default App