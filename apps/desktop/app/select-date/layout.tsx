import Header from "../../components/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header state={"select-date"} />
      <div>{children}</div>
    </div>
  );
}
