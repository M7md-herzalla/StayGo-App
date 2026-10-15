import { useContext } from "react";
import  { LanguageContext } from "../languageProvider";
function WhyChooseUs() 

{
    const {texts}=useContext(LanguageContext);

  
  return (
    <section className="why-section">

      <h1>{texts.why.whyTitle}</h1>

      <div className="why-cards">

        <div className="why-card">
            
          <h3> 💸 {texts.why.pricesTitle}</h3>
          <p>
            {texts.why.pricesDescription}
          </p>
        </div>

        <div className="why-card">
          <h3> ✅ {texts.why.hotelsTitle}</h3>
          <p>
                {texts.why.hotelsDescription}       
        </p>
        </div>

        <div className="why-card">
          <h3> 😃 {texts.why.bookingTitle}</h3>
          <p>
            {texts.why.bookingDescription}
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;