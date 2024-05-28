import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bbapage from "./BBA/Bbapage";
import Home from './Home';
import About1 from "./About1";
import Acca from "./Acca";
import Ca from "./Ca";
import Bs from "./Bs";
import Contact from "./Contact";
import MCQS from "./BBA/ACT201/MCQS";
import MCQS2 from "./BBA/ACT501/MCQS2";
import MCQS3 from "./BBA/ACT301/MCQS3.js";
import Short3 from "./BBA/ACT301/Short3.js";
import Long3 from "./BBA/ACT301/Long3.js";
import Short from "./BBA/ACT201/Short.js";
import Long from "./BBA/ACT201/Long.js";
import Short2 from "./BBA/ACT501/Short2.js";
import Long2 from "./BBA/ACT501/Long2.js";
import MCQS4 from "./BBA/FIN201/MCQS4.js";
import Short4 from "./BBA/FIN201/Short4.js";
import Long4 from "./BBA/FIN201/Long4.js";
import MCQS5 from "./BBA/MKT507/MCQS5.js";
import Short5 from "./BBA/MKT507/Short5.js";
import Long5 from "./BBA/MKT507/Long5.js";
import MCQS6 from "./BBA/FIN501/MCQS6.js";
import Short6 from "./BBA/FIN501/Short6.js";
import Long6 from "./BBA/FIN501/Long6.js";
import MCQS7 from "./BBA/MGT401/MCQS7.js";
import Short7 from "./BBA/MGT401/Short7.js";
import Long7 from "./BBA/MGT401/Long7.js";
import MCQS8 from "./BBA/MGT507/MCQS8.js";
import Short8 from "./BBA/MGT507/Short8.js";
import Long8 from "./BBA/MGT507/Long8.js";
import MCQS9 from "./BBA/MKT201/MCQS9.js";
import Short9 from "./BBA/MKT201/Short9.js";
import Long9 from "./BBA/MKT201/Long9.js";
import MCQS10 from "./BBA/MGT202/MCQS10.js";
import Short10 from "./BBA/MGT202/Short10.js";
import Long10 from "./BBA/MGT202/Long10.js";
import MCQS11 from "./BBA/MGT502/MCQS11.js";
import Short11 from "./BBA/MGT502/Short11.js";
import Long11 from "./BBA/MGT502/Long11.js"; 
import MCQS12 from "./BBA/MGT501/MCQS12.js";
import Short12 from "./BBA/MGT501/Short12.js";
import Long12 from "./BBA/MGT501/Long12.js";
import MCQS13 from "./BBA/MGT506/MCQS13.js";
import Short13 from "./BBA/MGT506/Short13.js";
import Long13 from "./BBA/MGT506/Long13.js";
import MCQS14 from "./BBA/FIN505/MCQS14.js";
import Short14 from "./BBA/FIN505/Short14.js";
import Long14 from "./BBA/FIN505/Long14.js";
import MCQS15 from "./BBA/GEN501/MCQS15.js";
import Short15 from "./BBA/GEN501/Short15.js";
import Long15  from "./BBA/GEN501/Long15.js";
import MCQS16 from "./BBA/ECO201/MCQS16.js";
import Short16 from "./BBA/ECO201/Short16.js";
import Long16 from "./BBA/ECO201/Long16.js";
import MCQS17 from "./BBA/ECO202/MCQS17.js";
import Short17 from "./BBA/ECO202/Short17.js";
import Long17 from "./BBA/ECO202/Long17.js";
import MCQS18 from "./BBA/GEN303/MCQS18.js";
import Short18 from "./BBA/GEN303/Short18.js";
import Long18 from "./BBA/GEN303/Long18.js";
import MCQS19 from "./BBA/FIN301/MCQS19.js";
import Short19 from "./BBA/FIN301/Short19.js";
import Long19 from "./BBA/FIN301/Long19.js";
import MCQS20 from "./BBA/QNT501/MCQS20.js";
import Short20 from "./BBA/QNT501/Short20.js";
import Long20 from "./BBA/QNT501/Long20.js";
function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About1/>}/>
          <Route path="/bba" element={<Bbapage />} />
          <Route path="/bba/:code/mcqs" element={<MCQS2 />} />
          <Route path="/bba/act201/mcqs" element={<MCQS />} />
          <Route path="/bba/act301/mcqs" element={<MCQS3 />} />
          <Route path="/bba/fin201/mcqs" element={<MCQS4 />} />
          <Route path="/bba/mkt507/mcqs" element={<MCQS5 />} />
          <Route path="/bba/fin501/mcqs" element={<MCQS6 />} />
          <Route path="/bba/mgt401/mcqs" element={<MCQS7 />} />
          <Route path="/bba/mgt507/mcqs" element={<MCQS8 />} />
          <Route path="/bba/mkt201/mcqs" element={<MCQS9 />} />
          <Route path="/bba/mgt202/mcqs" element={<MCQS10 />} />
          <Route path="/bba/mgt502/mcqs" element={<MCQS11 />} />
          <Route path="/bba/mgt501/mcqs" element={<MCQS12 />} />
          <Route path="/bba/mgt506/mcqs" element={<MCQS13 />} />
          <Route path="/bba/fin505/mcqs" element={<MCQS14 />} />
          <Route path="/bba/gen501/mcqs" element={<MCQS15 />} />
          <Route path="/bba/eco201/mcqs" element={<MCQS16 />} />
          <Route path="/bba/eco202/mcqs" element={<MCQS17 />} />
          <Route path="/bba/gen303/mcqs" element={<MCQS18 />} />
          <Route path="/bba/fin301/mcqs" element={<MCQS19 />} />
          <Route path="/bba/qnt501/mcqs" element={<MCQS20 />} />
          <Route path="/bba/:code/short-questions" element={<Short/>} />
          <Route path="/bba/act501/short-questions" element={<Short2/>} />
          <Route path="/bba/act301/short-questions" element={<Short3/>} />
          <Route path="/bba/fin201/short-questions" element={<Short4/>} />
          <Route path="/bba/mkt507/short-questions" element={<Short5/>} />
          <Route path="/bba/fin501/short-questions" element={<Short6/>} />
          <Route path="/bba/mgt401/short-questions" element={<Short7/>} />
          <Route path="/bba/mgt507/short-questions" element={<Short8/>} />
          <Route path="/bba/mkt201/short-questions" element={<Short9/>} />
          <Route path="/bba/mgt202/short-questions" element={<Short10/>} />
          <Route path="/bba/mgt502/short-questions" element={<Short11/>} />
          <Route path="/bba/mgt501/short-questions" element={<Short12/>} />
          <Route path="/bba/mgt506/short-questions" element={<Short13/>} />
          <Route path="/bba/fin505/short-questions" element={<Short14/>} />
          <Route path="/bba/gen501/short-questions" element={<Short15/>} />
          <Route path="/bba/eco201/short-questions" element={<Short16/>} />
          <Route path="/bba/eco202/short-questions" element={<Short17/>} />
          <Route path="/bba/gen303/short-questions" element={<Short18/>} />
          <Route path="/bba/fin301/short-questions" element={<Short19/>} />
          <Route path="/bba/qnt501/short-questions" element={<Short20/>} />
          <Route path="/bba/:code/long-questions" element={<Long/>} />
          <Route path="/bba/act501/long-questions" element={<Long2/>} />
          <Route path="/bba/act501/long-questions" element={<Long3/>} />
          <Route path="/bba/fin201/long-questions" element={<Long4/>} />
          <Route path="/bba/mkt507/long-questions" element={<Long5/>} />
          <Route path="/bba/fin501/long-questions" element={<Long6/>} />
          <Route path="/bba/mgt401/long-questions" element={<Long7/>} />
          <Route path="/bba/mgt507/long-questions" element={<Long8/>} />
          <Route path="/bba/mkt201/long-questions" element={<Long9/>} />
          <Route path="/bba/mgt202/long-questions" element={<Long10/>} />
          <Route path="/bba/mgt502/long-questions" element={<Long11/>} />
          <Route path="/bba/mgt501/long-questions" element={<Long12/>} />
          <Route path="/bba/mgt506/long-questions" element={<Long13/>} />
          <Route path="/bba/fin505/long-questions" element={<Long14/>} />
          <Route path="/bba/gen501/long-questions" element={<Long15/>} />
          <Route path="/bba/eco201/long-questions" element={<Long16/>} />
          <Route path="/bba/eco202/long-questions" element={<Long17/>} />
          <Route path="/bba/gen303/long-questions" element={<Long18/>} />
          <Route path="/bba/fin301/long-questions" element={<Long19/>} />
          <Route path="/bba/qnt501/long-questions" element={<Long20/>} />

          <Route path="/acca" element={<Acca/>}/>
          <Route path="/ca" element={<Ca/>}/>
          <Route path="/finance" element={<Bs/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
