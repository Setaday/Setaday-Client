import SelectTimeHeader from "../../components/SelectTimeHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SelectTimeHeader />
        {children}
      </body>
    </html>
  );
}
