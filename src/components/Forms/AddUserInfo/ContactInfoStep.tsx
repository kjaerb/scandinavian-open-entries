import userStore from "@/stores/userStore";

interface ContactInfoStepProps {}

export function ContactInfoStep({}: ContactInfoStepProps) {
  const { name, setName, email, setEmail, phone, setPhone } = userStore();

  return <div>ContactInfoStep</div>;
}
