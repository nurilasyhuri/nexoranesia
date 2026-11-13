'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    totalItems, 
    formattedTotalPrice, 
    totalPrice 
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div 
          onClick={closeCart}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity" 
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-white border-l border-slate-200 text-slate-800 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FDEEE7] text-[#FF7A3D] border border-[#FADCD3]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Keranjang Belanja</h3>
                  <p className="text-xs text-slate-500">{totalItems} item siap diproses</p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-slate-400 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-semibold text-slate-800">Keranjang Anda Kosong</h4>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Jelajahi kit robotik, komponen ESP32, sensor, dan modul di NEXORANESIA Store.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 rounded-2xl bg-white border border-[#EDE6DD] flex gap-4 hover:border-[#FF7A3D] transition-colors"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#FAF8F5] border border-[#EDE6DD] flex items-center justify-center p-2 shrink-0">
                      <div className="w-full h-full bg-[#FDEEE7] rounded-lg flex items-center justify-center text-[#FF7A3D] text-xs font-mono font-bold">
                        KIT
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-[#FF7A3D] font-medium mt-0.5">
                        {item.product.category}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-slate-300 rounded-lg bg-white shadow-2xs">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:text-[#FF7A3D] text-slate-600 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:text-[#FF7A3D] text-slate-600 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Jumlah Item</span>
                    <span className="font-bold text-slate-900">{totalItems} barang</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Status Pemesanan</span>
                    <span className="text-emerald-600 font-semibold">Tersedia via WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transaksi aman via Transfer Bank, QRIS, atau COD.</span>
                </div>

                <button
                  onClick={() => {
                    closeCart();
                    setCheckoutModalOpen(true);
                  }}
                  className="w-full py-3.5 px-4 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md shadow-[#FF7A3D]/25 transition-all cursor-pointer active:scale-95"
                >
                  <span>Lanjutkan ke Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CheckoutModal 
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cartItems={cart}
        totalAmount={totalPrice}
      />
    </>
  );
};
