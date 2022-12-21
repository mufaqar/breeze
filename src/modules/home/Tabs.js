import React from 'react'
import TabsLayout from "../../components/tabs-layout/TabsLayout";
import { homeModuleData } from "../../mockData/home"

const HomeModule = () => {
    return (
        <>
            <TabsLayout homeModuleData={homeModuleData} >
                <>
                    Item One 
                </>
                <>
                    Item Two
                </>
                <>
                    Item Three
                </>
                <>
                    project
                </>
                <>
                    personal
                </>
                <>
                    work
                </>
                
            </TabsLayout>
        </>
    )
}

export default HomeModule