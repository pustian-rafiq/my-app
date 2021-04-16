 
import './App.css';
 
import TopNavigation from './components/TopNavigation/TopNavigation'
import TopBanner from './components/TopBanner/TopBanner'
import Services from './components/Services/Services'
import Analysis from './components/Analysis/Analysis'
import Summary from './components/Summary/Summary';
import RecentProjects from './components/RecentProjects/RecentProjects';
import Courses from './components/Courses/Courses';
import Video from './components/Video/Video';
import ClientReview from './components/ClientReview/ClientReview';
function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProjects/>
      <Courses/>
       <Video/>
       <ClientReview/>

       
    </div>
  );
}

export default App;
