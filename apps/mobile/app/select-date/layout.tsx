import SelectDateHeader from "../../components/select-date/SelectDateHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <SelectDateHeader />
      <div className="px-[2rem] py-[3rem]">{children}</div>
    </section>
  );
}
