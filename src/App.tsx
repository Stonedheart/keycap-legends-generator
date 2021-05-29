import LegendsStyleContextProvider from './contexts/legendsStylesContext';
import KeycapsSelectionContextProvider from './contexts/keycapsSelectionContext';
import Keycaps from './components/keycaps/Keycaps';
import Column from './components/column/Column';
import LegendsStylingForm from './components/legendStylingForm/LegendsStylingForm';

import './App.css';


const App = () => {
    return (
        <KeycapsSelectionContextProvider>
            <LegendsStyleContextProvider>
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
            </LegendsStyleContextProvider>
        </KeycapsSelectionContextProvider>
    );
}

export default App;
