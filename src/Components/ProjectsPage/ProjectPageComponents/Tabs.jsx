import { Tabs } from "keep-react";
import { Gear, GridFour, Phone, User, WarningCircle } from "phosphor-react";
const TabsKeep = () => {
  return (
    <Tabs
    aria-label="Tabs"
    style="underline"
    borderPosition="bottom"
    iconPosition="left"
    className="text-blue-700"
  >
    <Tabs.Item title="All " icon={<User size={20} />}>
      Profile content
    </Tabs.Item>
    <Tabs.Item title="Excavation" icon={<GridFour size={20} />}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Foundation" icon={<Gear size={20} />}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Superstructure" icon={<Phone size={20} />}>
      Contacts content
    </Tabs.Item>
  </Tabs>
  );
};

export default TabsKeep;