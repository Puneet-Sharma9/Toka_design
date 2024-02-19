import Header from './component/Header/Header';
import CreateSection from './component/CreateSection/CreateSection';
import CartoonSection from './component/CartoonSection/CartoonSection';
import TopItemSection from './component/TopItem/TopItemSection';
import CreatorSection from './component/CreatorSection/CreatorSection';
import CommunitySection from './component/CommunitySection/CommunitySection';
import SunSection from './component/SunSection/SunSection';
import FeaturedSecton from './component/FeaturedSection/FeaturedSecton';
import VideoSection from './component/VideoSection/VideoSection';
import FooterSection from './component/FooterSection/FooterSection';

function App() {

  const sectionFirst ={
    heading: "CREATE, SELL , BUY",
    description: "The new creative economy",

  }

  const sectionSecond = {
    description: "The old creative economy",
    heading: "Trade  Spot  Refer",
    extraImage: true
  }

  const button = {
    btn : "Start Now",
  }

  const values = {
      mainHead: "CREATE",
      title: 'Want to become a creator?',
      browse: <p>Browse dozens of my other extraordinary art collections <br /> in the world’s largest NFT marketplace.</p>
    }

  const sun_text = {
    text : "A non-fungible token is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, videos, audio, and other types of digital files.",
    community_head : "Want to join the creative community?",
    main_commun: "Our Community",
    nft_head: <p>Why do you need to buy <br /> NFT?</p>,
    main_nft : "ABOUT NFT",
    feature_head : "Featured Collection",
    feature_subHead : <p>Enjoy the latest hot <br /> collection</p>,
  }

  return (
    <div>
      <Header />
      <CreateSection data={sectionFirst} but = {button}/>
      <CartoonSection />
      <TopItemSection />
      <CreatorSection data1 = {values} but={button}/>
      <CommunitySection data = {sun_text}/>
      <SunSection data = {sun_text} but = {button}/>
      <FeaturedSecton feature = {sun_text}/>
      <VideoSection data1 = {values}/>
      <CreateSection  data={sectionSecond} but = {button}/>
      <FooterSection />
    </div>
  );
}

export default App;
