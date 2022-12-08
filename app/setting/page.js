"use client";

import { Paper } from '@mui/material';
import React from 'react'
import SettingTabsLayout from '../../src/components/setting-layout/SettingTabsLayout';
import { settingModuleData } from '../../src/mockData/setting';

export default function Setting() {
  return (
    <>
      <SettingTabsLayout homeModuleData={settingModuleData}>
        <>1</>
        <>2</>
      </SettingTabsLayout>
    </>
  )
}
