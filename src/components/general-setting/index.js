import React from "react";
import { settingModuleData } from "../../mockData/setting";
import SettingTabsLayout from "../setting-layout/SettingTabsLayout";


export default function GeneralSetting({closeSetting}) {
  return (
    <SettingTabsLayout homeModuleData={settingModuleData} closeSetting={closeSetting}> </SettingTabsLayout>
  );
}
