export interface Home {
  input: string;
  isSubmitting: boolean;
  error?: string;
}
export interface HomeActions {
  setInput: (value: string) => void;
  setIsSubmitting: (value: boolean) => void;
  submit: () => Promise<void>;
}
