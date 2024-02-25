import logo from './logo.svg';
import './App.css';
import { TheamProvider } from './context/Theme';
import { useEffect, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode,setThemeMode] = useState("light")
  
  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])
  

  return (
    <TheamProvider value={{themeMode, lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theam */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>
                 
     </TheamProvider>
  );
}

export default App;
