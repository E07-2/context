// import {useContext} from 'react';
// import MyContext from './context/MyContext';
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  // const context = useContext(MyContext)
  // console.log(context)
  return (
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  );
};

export default App;
