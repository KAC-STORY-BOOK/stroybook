import React, { HTMLAttributes, useState } from "react";
import "./TabMenu.css";
export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  content: string;
}

export interface TabsItemProps {
  tabs: TabProps[];
  defaultActiveTab?: number;
}

const TabMenu: React.FC<TabsItemProps> = ({ tabs, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  return (
    <>
      <div className="tabs">
        <div className="tabs-header">
          {tabs &&
            tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
        </div>

        <div className="tab-content">
          {tabs[activeTab] && (
            <div {...tabs[activeTab]}>{tabs[activeTab].content}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabMenu;
