import api from "./api";

export interface SendEmailProps {
  from: string;
  message: string;
}

export const sendEmail = async (props: SendEmailProps) => {
  await api.post("/send-email", props);
};
