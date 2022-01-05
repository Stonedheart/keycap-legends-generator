import KeycapsContextProvider from './contexts/keycapsContext';
import LegendsContextProvider from './contexts/legendsContext';
import Keycaps from './components/keycaps/Keycaps';
import Column from './components/column/Column';
import LegendsStylingForm from './components/legendStylingForm/LegendsStylingForm';

import './App.css';


const App = () => {
    return (
        <div className="app">
            <div className="app-container">
                <KeycapsContextProvider>
                    <LegendsContextProvider>
                            <Column>
                                <LegendsStylingForm />
                            </Column>
                            <Column>
                                <Keycaps />
                            </Column>
                    </LegendsContextProvider>
                </KeycapsContextProvider>
            </div>
        </div>
    );
}

export default App;
