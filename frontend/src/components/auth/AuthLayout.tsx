import { ReactNode } from "react";
import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4 lg:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
