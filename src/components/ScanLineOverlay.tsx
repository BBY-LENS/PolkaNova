export const ScanLineOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className="scan-line absolute inset-0 h-screen opacity-30" />
    </div>
  );
};
