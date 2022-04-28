import React from "react";
import { Meta } from "@storybook/react";
import FooterChatButton from "../../components/Footer/FooterChatButton";

export default {
    component: FooterChatButton,
    title: 'Buttons/Footer Chat Button'
} as Meta;

export const ChatButton = () => <FooterChatButton />;