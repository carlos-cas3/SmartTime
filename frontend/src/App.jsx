import './App.css'

import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import Content from './content/Content';
import { useState } from 'react';

function App() {
  
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`dashboard ${collapsed ? 'collapsed' : ''}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content />
    </div>
  );
}

export default App;
