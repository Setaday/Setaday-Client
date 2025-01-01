import Header from "../../components/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[120rem]">
      <Header currentPage={"select-date"} />
      <div>{children}</div>
    </div>
  );
}
