import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignInDialog({ open, onOpenChange }: SignInDialogProps) {
  async function handleGoogleSignIn() {
    try {
      await signInWithGoogle();
      onOpenChange(false);
    } catch (err) {
      console.error("Sign-in failed:", err);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Welcome to Astra Tracker</DialogTitle>
          <DialogDescription>
            Sign in to sync your tasks, habits, and goals across devices.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-full"
        >
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
