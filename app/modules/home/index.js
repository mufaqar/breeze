import React from 'react'
import TabsLayout from "../../components/tabs-layout/TabsLayout";
import { homeModuleData } from "../../mockData/home"

const TabPanell = () => {
    return (
        <p>lorem12</p>
    )
}

const HomeModule = () => {
    return (
        <>
            <TabsLayout homeModuleData={homeModuleData} >
                <>
                    Item One sdf sdfjl
                </>
                <p>
                    Item Two
                </p>
                <p>
                    Item Three
                </p>
            </TabsLayout>
        </>
    )
}

export default HomeModule