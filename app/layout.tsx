import { ThemeProvider } from "@emotion/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <ThemeProvider>{children}</ThemeProvider>
    </html>
  );
}
