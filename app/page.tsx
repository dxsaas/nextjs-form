import ContactForm from "@/components/features/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-24 h-screen">
        <ContactForm />
      </div>
    </>
  );
}
