import {Showcase} from './components/showcase/Showcase.jsx';
import { appStyle } from './AppStyle.js';
import { Form } from './components/form/Form.jsx';
import { svg } from './components/fonts_colors';
import { Map } from './components/map/Map.js';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div style={appStyle} className="App">
      <div style={{gridColumn:'1/4', border:'black solid 1px', marginLeft:-50, marginRight:-50}}>Header</div>
      <Map />
      <Navbar />
      <Showcase />
      <Form />
      <div style={{gridColumn:'1/4', border:'black solid 1px'}}>Rest</div>
    </div>
  );
}

export default App;
