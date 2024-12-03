import './App.css';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { TabPanel, TabView } from 'primereact/tabview';
import FactoryView from './components/factory/FactoryView';
import SingletonView from './components/singleton/SingletonView';



const App: React.FC = () => {

  const headerWithAvatar = (options: any) => {
    const className = `${options.className} justify-content-space-between`;

    return (
      <div className={className}>
        <div className="flex align-items-center gap-2">
          <Avatar image="img/logo1.png" size="large" shape="square" />
          <span className="font-bold text-4xl">Design Patterns</span>
        </div>
      </div>
    );
  }

  const footer = () => {
    return (
      <div className="flex justify-content-center">
        <span className="text-center">© 2024 - Design Patterns - Emerson Okopnik & Murilo Costa Bittencourt</span>
      </div>
    );
  }

  return (
    <div className="p-3">
      <Panel headerTemplate={headerWithAvatar} footerTemplate={footer}>

        <TabView>
          <TabPanel header="Singleton" >
            <SingletonView />
          </TabPanel>
          <TabPanel header="Factory Method">
            <FactoryView />
          </TabPanel>
        </TabView>
      </Panel>
    </div>
  );
}

export default App;
