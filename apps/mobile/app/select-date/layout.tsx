import SelectDateHeader from "../../components/select-date/SelectDateHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SelectDateHeader />
      <div className="px-[2rem]">{children}</div>
    </>
  );
}
