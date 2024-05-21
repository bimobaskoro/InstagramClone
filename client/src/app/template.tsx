import FooterComponent from "@/_component/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      {/* <FooterComponent /> */}
    </>
  );
}
