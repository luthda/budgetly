import { SignupForm } from "@/components/auth/SignupForm";
import { AuthLayout } from "@/components/auth/AuthLayout";

export default function Signup() {
  return (
    <AuthLayout title="Create your account" subtitle="Start managing your finances today">
      <SignupForm />
    </AuthLayout>
  );
}
