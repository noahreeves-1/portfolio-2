export function NavbarSkeleton() {
  return (
    <nav className="fixed w-full z-50 border-b-stone-200 border-b-1 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 min-h-[64px]" />
      </div>
    </nav>
  );
}

export function HeroSkeleton() {
  return <div className="min-h-screen bg-[#fafafa]" />;
}

export function ContactSkeleton() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8" />
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded" />
            <div className="h-12 bg-gray-200 rounded" />
            <div className="h-32 bg-gray-200 rounded" />
            <div className="h-12 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MapviewSkeleton() {
  return (
    <div className="h-[600px] bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4" />
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  );
}