import React from "react";
import { Meta, Story } from "@storybook/react";

import Footer from "../../components/Footer/Footer";

import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: Footer,
    title: 'Footer/Footer all'
} as Meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
Default.decorators = [
    (story: Function) => {
        return (
           <AppProvider>
                {story()}
            </AppProvider> 
        )
        
    }
];