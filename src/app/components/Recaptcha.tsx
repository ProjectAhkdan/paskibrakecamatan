// components/Recaptcha.tsx
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Definisikan tipe untuk properti komponen
interface RecaptchaProps {
  onChange: (value: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const handleChange = (value: string | null) => {
    onChange(value);
  };

  return (
    <ReCAPTCHA
      sitekey="6Lfafi4qAAAAAAnRrKkiS543AEwc0RJgwKPjpHGO"
      onChange={handleChange}
    />
  );
};

export default Recaptcha;
