import { describe, it, expect, vi, Mock, afterEach } from "vitest";
import { render, screen } from "../../../test-utlis"; // your custom render that wraps with QueryClientProvider
import userEvent from "@testing-library/user-event";
import { SignupForm } from "../SignupForm";

// A mock for your `useToast` hook
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Global fetch mock
global.fetch = vi.fn();

describe("SignupForm", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the signup form fields", () => {
    render(<SignupForm />);

    // Check that the form inputs exist with exact labels
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    // Query for the submit button by its accessible name ("Create Account")
    expect(screen.getByRole("button", { name: /create account/i })).toBeInTheDocument();
  });

  it("validates email is required and displays an error if empty", async () => {
    render(<SignupForm />);
    const submitButton = screen.getByRole("button", { name: /create account/i });
    await userEvent.click(submitButton);
    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
  });

  it("displays error message for invalid email format", async () => {
    render(<SignupForm />);
    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByRole("button", { name: /create account/i });
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, "invalid-email");
    await userEvent.click(submitButton);
    // Using a custom matcher in case the error text is split in the DOM
    expect(
      await screen.findByText((content) => content.includes("Please enter a valid email address"))
    ).toBeInTheDocument();
  });

  it("displays error message for password that is too short", async () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: /create account/i });
    await userEvent.clear(passwordInput);
    // "Short1" is only 6 characters (minimum is 8)
    await userEvent.type(passwordInput, "Short1");
    await userEvent.click(submitButton);
    expect(await screen.findByText("Password must be at least 8 characters")).toBeInTheDocument();
  });

  it("displays error message for password missing required characters", async () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: /create account/i });
    await userEvent.clear(passwordInput);
    // Enter a password that is long enough but lacks uppercase or digits
    await userEvent.type(passwordInput, "alllowercase");
    await userEvent.click(submitButton);
    expect(
      await screen.findByText(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
    ).toBeInTheDocument();
  });

  it("displays error message when password and confirmPassword do not match", async () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const submitButton = screen.getByRole("button", { name: /create account/i });
    await userEvent.clear(passwordInput);
    await userEvent.clear(confirmPasswordInput);
    await userEvent.type(passwordInput, "Password1");
    await userEvent.type(confirmPasswordInput, "Password2");
    await userEvent.click(submitButton);
    expect(await screen.findByText("Passwords do not match")).toBeInTheDocument();
  });
});
