import SplashHero from "../components/splash/splash_hero";
import SplashWhatIsFlossbank from "../components/splash/splash_what_is_flossbank";
import SplashForBussinesses from "../components/splash/splash_for_businesses";
import Footer from "../components/common/footer";
import SplashHeader from "../components/splash/splash_header";
import SplashForDevelopers from "../components/splash/splash_for_developers";

function Splash() {
  const scrollWindow = (offset) => {
    window.scroll({
      top: offset,
      behavior: "smooth",
    });
  };

  const scrollToId = (id) => {
    const $anchor = document.getElementById(id);
    if (!$anchor) return;
    const offset = $anchor.getBoundingClientRect().top + window.pageYOffset;
    scrollWindow(offset);
  };

  const scrollToDeveloperSection = () => {
    scrollToId("forDevelopers");
  };

  const scrollToBusinessSection = () => {
    scrollToId("forBusinesses");
  };

  return (
    <>
      <SplashHeader />
      <SplashHero
        scrollToDeveloperSection={scrollToDeveloperSection}
        scrollToBusinessSection={scrollToBusinessSection}
      />
      <SplashWhatIsFlossbank />
      <SplashForDevelopers id="forDevelopers" />
      <SplashForBussinesses id="forBusinesses" />
      <Footer />
    </>
  );
}

export default Splash;
