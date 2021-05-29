import LegendsStyleContextProvider from './contexts/legendsStylesContext';
import Keycaps from './components/keycaps/Keycaps';
import Column from './components/column/Column';

import './App.css';
import LegendsStylingForm from './components/legendStylingForm/LegendsStylingForm';



const App = () => {
    return (
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
    );
}

export default App;
