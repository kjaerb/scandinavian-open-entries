export type Display = "inline" | "modal";

export type DisplayModal = {
  display: Extract<Display, "modal">;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type DisplayInline = {
  display: Extract<Display, "inline">;
};

export type DisplayOptions = DisplayModal | DisplayInline;
