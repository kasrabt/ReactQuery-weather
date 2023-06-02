
import './App.css';
import { QueryClientProvider , QueryClient } from "react-query"
import CryptoC from './components/MainComponent';
function App() {
  const queryC = new QueryClient()
  return (
    <QueryClientProvider client={queryC}>
       <div className='App'>
     <CryptoC />
   </div>
    </QueryClientProvider>
  
  );
}

export default App;
