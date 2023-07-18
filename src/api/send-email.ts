import api from "./api";

export interface SendEmailProps {
  from: string;
  message: string;
}

export const sendEmail = async (props: SendEmailProps) => {
  //
  const result = await api.post("/send-email", props);
  console.log(result);
};
