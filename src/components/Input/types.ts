export type InputProps = {
  variant?: string;
  value: string;
  onChange: (value: string, name: string) => void
  placeholder?: string;
  active?: boolean;
  cancelButton?: boolean;
  style?: string | undefined;
  name: string
}