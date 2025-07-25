export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Auth Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
