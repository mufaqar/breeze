import React from 'react'
import TabsLayout from "../../components/tabs-layout/TabsLayout";
import TodoHome from '../../components/todo/home';
import { homeModuleData } from "../../mockData/home"

const HomeModule = () => {
    return (
        <>
            <TabsLayout homeModuleData={homeModuleData} >
                <>
                    <TodoHome/>
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