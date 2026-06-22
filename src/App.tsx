import { useState } from "react";
import { MainLayout } from "@/pages/layouts/main-layout";

const navItems = [
  {
    id: "home",
    label: "首页",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "discover",
    label: "发现",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "我的",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const tabTitles: Record<string, string> = {
  home: "首页",
  discover: "发现",
  profile: "我的",
};

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <MainLayout
      title={tabTitles[activeTab] ?? "首页"}
      bottomNav={{
        items: navItems,
        activeId: activeTab,
        onChange: setActiveTab,
      }}
    >
      <div className="text-muted-foreground text-sm">
        {activeTab === "home" && <p>欢迎使用 Hamusuke。</p>}
        {activeTab === "discover" && <p>发现内容将显示在这里。</p>}
        {activeTab === "profile" && <p>个人中心将显示在这里。</p>}
      </div>
    </MainLayout>
  );
}

export default App;