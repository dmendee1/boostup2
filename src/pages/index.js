import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import ComingSoon from "./ComingSoon";
import Community from "./Community";
import FAQ from "./FAQ";
import Page404 from "./404";
import RoadMapOne from "./RoadMapOne";
import RoadMapTwo from "./RoadMapTwo";
import NftItem from "./NftItem";
import NftItemDetails from "./NftItemDetails";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import UnitTest from "./UnitTest";
import TeamDetail from "./TeamDetail";
import ApiTestAutomation from "./ApiTestAutomation";
import IntegrationTest from "./IntegrationTest";


const routes = [
  { path: '/', component: <HomeOne />},
  { path: '/home-v2', component: <HomeTwo />},
  { path: '/home-v3', component: <HomeThree />},
  { path: '/about-v1', component: <AboutOne />},
  { path: '/about-v2', component: <AboutTwo />},
  { path: '/coming-soon', component: <ComingSoon />},
  { path: '/community', component: <Community />},
  { path: '/faq', component: <FAQ />},
  { path: '/404', component: <Page404 />},
  { path: '/road-map-v1', component: <RoadMapOne />},
  { path: '/road-map-v2', component: <RoadMapTwo />},
  { path: '/nft-item', component: <NftItem />},
  { path: '/nft-item-details', component: <NftItemDetails />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/contact', component: <Contact />},
  { path: '/unit-test', component: <UnitTest />},
  { path: '/team-details', component: <TeamDetail />},
  { path: '/api-test', component: <ApiTestAutomation />},
  { path: '/integration-test', component: <IntegrationTest />},

]

export default routes;