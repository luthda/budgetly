import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Input ref={ref} className={cn(error && "border-destructive", className)} {...props} />
        {error && <p className="text-sm text-destructive">{error.message}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
