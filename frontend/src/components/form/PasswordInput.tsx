import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormInput, FormInputProps } from "./FormInput";

interface PasswordInputProps extends Omit<FormInputProps, "type"> {
  showToggle?: boolean;
}

export const PasswordInput = ({ showToggle = true, ...props }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative">
      <FormInput type={isPasswordVisible ? "text" : "password"} {...props} />
      {showToggle && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-8 h-9 w-9"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span className="sr-only">{isPasswordVisible ? "Hide password" : "Show password"}</span>
        </Button>
      )}
    </div>
  );
};
