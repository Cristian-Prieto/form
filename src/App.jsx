import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import style from "./App.module.css"


function App() {
  const footerYear = "2077";

  return (
    <div className={style.div}>
      <Form />
      <Footer year={footerYear} />
    </div>
  );
}

export default App;
