import AddUserInfo from "@/components/Forms/AddUserInfo/AddUserInfo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <AddUserInfo />
    </div>
  );
}
