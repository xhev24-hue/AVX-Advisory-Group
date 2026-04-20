export const metadata = {
  title: "AVX Advisory Group",
  description: "Regulatory, AML and compliance support for financial services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#ffffff", color: "#0f172a" }}>
        {children}
      </body>
    </html>
  );
}
