import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  from_email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  from_email,
}) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">
      Someone actually messaged you bro
    </h1>
    <p className="mb-4">Name: {name}</p>
    <p className="mb-4">Email: {from_email}</p>
    <p className="text-lg">Message: {message}</p>
  </div>
);
