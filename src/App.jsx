import {Showcase} from './components/showcase/Showcase.jsx';
import { appStyle } from './AppStyle.js';
import { Form } from './components/form/Form.jsx';
import { svg } from './components/fonts_colors';
import { Map } from './components/map/Map.js';

// Added Divs to visualize where the rest of the element go
function App() {
  return (
    <div style={appStyle} className="App">
      <div style={{gridColumn:'1/4', border:'black solid 1px', marginLeft:-50, marginRight:-50}}>Header</div>
      <Map />
      <Form />
      <div style={{gridColumn:'1/4', border:'black solid 1px'}}>Rest</div>
    </div>
  );
}

export default App;
