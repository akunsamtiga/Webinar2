import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import TargetAudience from "./components/TargetAudience";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import Sponsorship from "./components/Sponsorship";
import Message from "./components/Message";

export default function Home() {
  return (
    <>
      <main>
        <Message />
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <TargetAudience />
        <Pricing />
        <FAQ />
        <Registration />
        <Sponsorship />
      </main>
    </>
  );
}
