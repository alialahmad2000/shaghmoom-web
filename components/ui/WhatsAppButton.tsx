import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/content/site";
import { whatsappLabel } from "@/content/site";

/** WhatsApp click-to-chat button with a pre-filled Arabic message (§9). */
export function WhatsAppButton({
  label = whatsappLabel,
  message,
  size = "md",
  variant = "whatsapp",
  className = "",
}: {
  label?: string;
  message?: string;
  size?: "md" | "lg";
  variant?: "whatsapp" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Button
      href={whatsappHref(message)}
      external
      variant={variant}
      size={size}
      className={className}
      icon={<WhatsAppIcon className="h-5 w-5" />}
    >
      {label}
    </Button>
  );
}
