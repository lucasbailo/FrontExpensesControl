import Beneficios from "../components/Beneficios";
import ComoFunciona from "../components/ComoFunctiona";
import Faq from "../components/Faq";
import FristSection from "../components/FirstSection";
import InfoSection from "../components/InfoSection";
import MediaSection from "../components/MediaSection";
import TesteGratis from "../components/TesteGratis";

export default function Home() {
    return (
        <>
            <FristSection />
            <InfoSection />
            <ComoFunciona />
            <Beneficios />
            <MediaSection />
            <Faq />
            <TesteGratis />
        </>
    );
}