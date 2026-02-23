
import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

interface FormCardProps {
  slots: number;
  onSuccess: () => void;
}

/** 
 * CẤU HÌNH MAUTIC ĐÃ CẬP NHẬT 
 */
const MAUTIC_CONFIG = {
  baseUrl: 'https://crm.nambds.vn', 
  formId: '7', // Đã cập nhật sang ID: 7
  formName: 'lead_magnet_bds' 
};

const FormCard: React.FC<FormCardProps> = ({ slots, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setLoading(true);

    try {
      // Chuẩn bị dữ liệu theo định dạng Mautic yêu cầu
      const mauticData = new FormData();
      // 'firstname' và 'email' là các alias mặc định thường dùng trong Mautic
      mauticData.append(`mauticform[firstname]`, formData.name);
      mauticData.append(`mauticform[email]`, formData.email);
      mauticData.append(`mauticform[formId]`, MAUTIC_CONFIG.formId);
      mauticData.append(`mauticform[formName]`, MAUTIC_CONFIG.formName);
      mauticData.append(`mauticform[return]`, ''); 

      // Gửi yêu cầu đến Mautic qua endpoint submit
      await fetch(`${MAUTIC_CONFIG.baseUrl}/form/submit?formId=${MAUTIC_CONFIG.formId}`, {
        method: 'POST',
        body: mauticData,
        mode: 'no-cors', // Sử dụng no-cors để tránh lỗi CORS khi Mautic thực hiện redirect
      });

      // Mautic nhận dữ liệu xong, đợi 1 chút để tạo cảm giác xử lý rồi chuyển trang
      setTimeout(() => {
        setLoading(false);
        onSuccess();
      }, 1000);

    } catch (error) {
      console.error('Lỗi khi gửi đến Mautic:', error);
      setLoading(false);
      // Vẫn chuyển đến trang Thank You để đảm bảo trải nghiệm khách hàng không bị ngắt quãng
      onSuccess();
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-soft border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
      
      <div className="mb-8 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 line-through">Giá gốc: 2.200.000đ</span>
          <span className="text-[9px] font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-red-100 animate-pulse">
            🔥 Miễn phí hôm nay
          </span>
        </div>
        <div className="p-3.5 bg-cream rounded-xl border border-gold/10">
          <p className="text-[10px] font-extrabold text-[#111827] mb-1.5 uppercase tracking-tight">Số lượng có hạn:</p>
          <div className="flex items-center gap-2.5">
            <div className="flex-grow h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gold rounded-full transition-all duration-1000" style={{ width: `${(slots/5)*100}%` }}></div>
            </div>
            <span className="text-[10px] font-black text-gold">Còn {slots} suất</span>
          </div>
          <p className="text-[9px] text-gray-400 mt-1.5 italic font-medium">Form sẽ tự động đóng khi hết suất quà tặng miễn phí.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-[#111827] uppercase tracking-widest ml-1">Họ và tên</label>
          <input
            required
            type="text"
            placeholder="Ví dụ: Nguyễn Văn Nam"
            className="w-full px-5 py-3.5 rounded-xl border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-medium text-sm text-gray-700 bg-cream/50"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-[#111827] uppercase tracking-widest ml-1">Email nhận file</label>
          <input
            required
            type="email"
            placeholder="email@gmail.com"
            className="w-full px-5 py-3.5 rounded-xl border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-medium text-sm text-gray-700 bg-cream/50"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        
        <label className="flex items-start gap-2.5 cursor-pointer select-none py-1 group">
          <input type="checkbox" defaultChecked className="mt-0.5 accent-gold h-3.5 w-3.5 rounded-md" required />
          <p className="text-[10px] text-gray-400 leading-relaxed font-medium group-hover:text-gray-500 transition-colors">
            Tôi đồng ý nhận tài liệu và các bài học thực chiến qua email. <br/>
            Có thể hủy bất cứ lúc nào chỉ với 1 click.
          </p>
        </label>

        <button
          disabled={loading || slots === 0}
          type="submit"
          className="w-full bg-[#111827] text-white font-black py-4 rounded-xl shadow-xl hover:bg-[#1a2332] active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2.5 group relative overflow-hidden"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-gold" />
          ) : (
            <>
              <span className="text-sm">GỬI FILE CHO TÔI NGAY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-[9px] text-gray-300 font-bold uppercase tracking-widest pt-1">
          <ShieldCheck className="w-2.5 h-2.5" />
          <span>Bảo mật • Không spam • Hủy bất cứ lúc nào</span>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
