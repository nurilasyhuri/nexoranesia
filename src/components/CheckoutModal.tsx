'use client';

import React, { useState } from 'react';
import { CartItem, useCart } from '@/context/CartContext';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/ecosystem';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
}) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    courier: 'JNE Regular',
    paymentMethod: 'QRIS Instant',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `NEX-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsSuccess(true);
    clearCart();

    const itemLines = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (x${item.quantity})`
      )
      .join('%0A');

    const message = `*PESANAN BARU NEXORANESIA STORE*%0A` +
      `No Pesanan: ${generatedId}%0A%0A` +
      `*Data Pelanggan:*%0A` +
      `Nama: ${formData.name}%0A` +
      `WhatsApp: ${formData.phone}%0A` +
      `Kota: ${formData.city}%0A` +
      `Alamat: ${formData.address}%0A` +
      `Kurir: ${formData.courier}%0A` +
      `Metode Bayar: ${formData.paymentMethod}%0A%0A` +
      `*Daftar Produk:*%0A${itemLines}%0A%0A` +
      `Catatan: ${formData.notes || '-'}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FDEEE7] border border-[#FADCD3]">
                Checkout Instan
              </span>
              <h3 className="font-heading font-black text-2xl text-slate-900 mt-2">
                Formulir Pengiriman & Pembayaran
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Lengkapi data penerima. Pesanan akan langsung diteruskan ke sistem logistik dan WhatsApp resmi NEXORANESIA.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Penerima *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pratama Nugraha"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="085183003060"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kota / Kabupaten & Kode Pos *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Malang, Jawa Timur (65141)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pilihan Ekspedisi Kurir
                  </label>
                  <select
                    value={formData.courier}
                    onChange={(e) => setFormData({ ...formData, courier: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  >
                    <option value="JNE Regular">JNE Regular (Estimasi 2-3 Hari)</option>
                    <option value="SiCepat Express">SiCepat Express (Estimasi 1-2 Hari)</option>
                    <option value="J&T Express">J&T Express Fast Delivery</option>
                    <option value="Ambil Langsung di Kantor NEXORANESIA">Ambil Langsung di Kantor (Jl. KH. Malik Dalam Buring, Malang)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat Lengkap Pengiriman *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Metode Pembayaran
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  >
                    <option value="QRIS Instant (Semua Bank / e-Wallet)">QRIS Instant (BCA, Mandiri, GoPay, OVO)</option>
                    <option value="Transfer Bank Manual (BCA / Mandiri)">Transfer Bank Rekening Resmi Perusahaan</option>
                    <option value="Cash on Delivery (COD Malang Raya)">Cash on Delivery / COD (Khusus Malang)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Catatan Pesanan (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Packing kardus rapi untuk kit"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                  <span>Ringkasan {cartItems.length} Produk</span>
                  <span className="text-[#FF7A3D] font-semibold">{cartItems.reduce((acc, c) => acc + c.quantity, 0)} Total Unit</span>
                </div>
                <div className="max-h-24 overflow-y-auto space-y-1 text-xs text-slate-700">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <span className="truncate pr-2">{item.product.name} (x{item.quantity})</span>
                      <span className="shrink-0 text-slate-400 font-medium">Siap Kirim</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Data aman & garansi retur 7 hari jika barang cacat produksi.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md shadow-[#FF7A3D]/25 transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesanan & Hubungkan WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-black text-2xl text-slate-900">
              Pesanan Berhasil Dicatat!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              ID Pesanan Anda: <span className="text-emerald-700 font-mono font-bold">{orderId}</span>. Kami membuka obrolan WhatsApp resmi untuk konfirmasi pembayaran dan nomor resi pengiriman.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1">
              <div><strong className="text-slate-900">Penerima:</strong> {formData.name} ({formData.phone})</div>
              <div><strong className="text-slate-900">Kota:</strong> {formData.city}</div>
              <div><strong className="text-slate-900">Metode:</strong> {formData.paymentMethod}</div>
              <div><strong className="text-slate-900">Status:</strong> Menunggu Konfirmasi WhatsApp</div>
            </div>

            <div className="pt-4 flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
              >
                Tutup Jendela
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20Admin%20NEXORANESIA,%20saya%20sudah%20checkout%20dengan%20ID%20${orderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
              >
                Buka WhatsApp Lagi
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
