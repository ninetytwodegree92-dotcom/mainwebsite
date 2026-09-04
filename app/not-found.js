import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingBag, Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-20 flex flex-col justify-between select-none">
      <Navbar />

      <section className="my-auto py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto text-center space-y-6">
        
        {/* 404 Display */}
        <div className="space-y-2">
          <span className="text-7xl sm:text-9xl font-black text-[#A9744F] tracking-tighter block font-mono">
            404
          </span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#A9744F]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
              PAGE NOT FOUND
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
          THIS PIECE DOES NOT EXIST
        </h1>

        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-md mx-auto">
          The collection or page you are looking for has been moved, renamed, or archived.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#A9744F] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F5F4F0] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-xs tracking-wider uppercase rounded-xl hover:border-[#A9744F] hover:text-[#A9744F] transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>EXPLORE CATALOG</span>
          </Link>
        </div>

      </section>

      <Footer />
    </main>
  );
}