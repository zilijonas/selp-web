import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">&copy; 2025 SELP. All Rights Reserved.</p>
        <Link
          href="https://www.facebook.com/profile.php?id=61573430615677"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-muted-foreground hover:text-[#00f2fe] transition-colors"
        >
          <i className="fab fa-facebook-f text-2xl"></i>
          <span className="text-sm">Follow us on Facebook</span>
        </Link>
      </div>
    </footer>
  );
}
