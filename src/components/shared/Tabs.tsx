interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex gap-8 mb-8 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`pb-2 px-1 ${
            activeTab === tab.value
              ? 'border-b-2 border-black font-medium'
              : 'text-gray-500'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs; 