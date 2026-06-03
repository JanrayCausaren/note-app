// loading-button.tsx
import { Loader2 } from "lucide-react";
import  { Button } from "../ui/button";

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  isLoading?: boolean;
};

export function LoadingButton({
  isLoading,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="size-4 animate-spin" />
      )}
      {children}
    </Button>
  );
}