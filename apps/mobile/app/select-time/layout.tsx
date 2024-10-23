import SelectTimeHeader from "../../components/SelectTimeHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SelectTimeHeader />
      {children}
    </>
  );
}
