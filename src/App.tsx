import KeycapsContextProvider from './contexts/keycapsContext';
import Keycaps from './components/keycaps/Keycaps';
import Column from './components/column/Column';
import LegendsStylingForm from './components/legendStylingForm/LegendsStylingForm';

import './App.css';


const App = () => {
    return (
        <KeycapsContextProvider>
            <div className="app">
                <div className="app-container">
                    <Column>
                        <LegendsStylingForm />
                    </Column>
                    <Column>
                        <Keycaps />
                    </Column>
                </div>
            </div>
        </KeycapsContextProvider>
    );
}

export default App;
