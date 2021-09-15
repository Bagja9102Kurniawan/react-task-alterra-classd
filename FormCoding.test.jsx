import FormCoding from "./FormCoding";
import { render, screen, fireEvent } from "@testing-library/react";
describe("FormCoding", () => {
  test("renders App component", () => {
    render(<FormCoding />);
    // screen.debug();
    expect(
      screen.getByText(/Pendaftaran Peserta Coding Bootcamp/)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
    expect(screen.getByText(/Submit/)).toBeInTheDocument();
  });

  test("input text for nama lengkap", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Bagja" },
    });
    expect(screen.getByDisplayValue("Bagja")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Bagja");
  });
  test("input text for email", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "bagja9102kur@gmail.com" },
    });
    expect(screen.getByDisplayValue("bagja9102kur@gmail.com")).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toHaveValue("bagja9102kur@gmail.com");
  });

  test("input number for no hp", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /noHandphone/i }), {
      target: { value: "081298415840" },
    });

    expect(screen.getByDisplayValue("081298415840")).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue("081298415840");
  });
  test("input text for nama with number", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Bu1ku Hebat" },
    });
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Bu1ku Hebat");
  });
  test("input email salah", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "bagja9102kurgmailcom" },
    });
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toHaveValue("bagja9102kurgmailcom");
  });
  test("input no hp salah", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /noHandphone/i }), {
      target: { value: "000000000000000000000000000000" },
    });
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(
      "000000000000000000000000000000"
    );
  });
  test("submit button", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Bagja" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "bagja9102kur@gmail.com" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /No handphone/i }), {
      target: { value: "081298415840" },
    });
    fireEvent.submit(screen.getByText("Submit"));
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue("");
  });
});
