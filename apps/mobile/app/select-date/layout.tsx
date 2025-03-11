export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
