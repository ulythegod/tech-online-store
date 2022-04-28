import React from "react";
import { Meta } from "@storybook/react";

import SocialsLinks from "../../components/Buttons/SocialsLinks";

export default {
    component: SocialsLinks,
    title: 'Buttons/Socials Links',
    parameters: {
        backgrounds: {
            default: 'black',
            values: [
              {
                name: 'black',
                value: '#000',
              },
              {
                name: 'dark blue',
                value: '#0156FF',
              },
            ],
        },
    }
} as Meta;

export const Links = () => (
    <div className="test-links">
        <SocialsLinks />
    </div>    
)