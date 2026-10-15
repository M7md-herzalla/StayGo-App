import { createContext,useState,useEffect } from "react";
export const LanguageContext=createContext(null);

function LanguageProvider({children,translations}) {
    const [language,setLanguage]=useState("en");
    function toggleLanguage(){
     setLanguage(current=>current==="en"?"ar":"en");   
    }
    useEffect(()=>{
        document.documentElement.lang=language;
        document.documentElement.dir =language==="ar"?"rtl":"ltr";
    },[language])

    return(
        <LanguageContext.Provider value={{language,toggleLanguage,texts:translations[language]}}>
            {children}
        </LanguageContext.Provider>
    )
}
export default LanguageProvider;