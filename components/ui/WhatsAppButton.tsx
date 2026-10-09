import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref, whatsappLabel } from "@/content/site";

/** WhatsApp click-to-chat with a pre-filled Arabic message, in brand button styles. */
export function WhatsAppButton({
  label = whatsappLabel,
  message,
  size = "md",
  variant = "ghost",
  className = "",
}: {
  label?: string;
  message?: string;
  size?: "md" | "lg";
  variant?: "solid" | "ghost";
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
