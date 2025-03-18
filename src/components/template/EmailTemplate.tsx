import * as React from "react";

interface Props {
  sender: string;
  email: string;
  content: string;
}

export const NewEmailTemplate = ({ sender, email, content }: Props) => (
  <div>
    <h1>Message from {sender}!</h1>
    email,
    <p className="">Sender email: {email}</p>
    <p className="">Content: {content}</p>
  </div>
);
