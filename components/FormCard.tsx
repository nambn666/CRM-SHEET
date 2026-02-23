
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Loader2, Sparkles } from 'lucide-react';

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gold/10 border border-gold/20 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold via-yellow-400 to-gold"></div>
      
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors duration-500"></div>
      
      <div className="mb-8 space-y-4 relative z-10">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 line-through">Giá gốc: 2.200.000đ</span>
          <motion.span 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[10px] font-black text-red-600 bg-red-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-red-100 flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" /> MIỄN PHÍ HÔM NAY
          </motion.span>
        </div>
        
        <div className="p-4 bg-gradient-to-br from-cream to-white rounded-2xl border border-gold/20 shadow-inner">
          <div className="flex justify-between items-end mb-2">
            <p className="text-[11px] font-black text-[#111827] uppercase tracking-tight">Số lượng quà tặng còn lại:</p>
            <span className="text-xs font-black text-gold animate-pulse">Còn {slots} suất</span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(slots/5)*100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-gold to-yellow-400 rounded-full"
            ></motion.div>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 italic font-medium text-center">Form sẽ tự động đóng khi đủ số lượng đăng ký.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="space-y-2">
          <label className="text-[11px] font-black text-[#111827] uppercase tracking-widest ml-1">Họ và tên của bạn</label>
          <input
            required
            type="text"
            placeholder="Ví dụ: Nguyễn Văn Nam"
            className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-bold text-sm text-gray-800 bg-cream/30 placeholder:text-gray-300"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-black text-[#111827] uppercase tracking-widest ml-1">Email nhận tài liệu</label>
          <input
            required
            type="email"
            placeholder="email@gmail.com"
            className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-bold text-sm text-gray-800 bg-cream/30 placeholder:text-gray-300"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        
        <label className="flex items-start gap-3 cursor-pointer select-none py-1 group/check">
          <input type="checkbox" defaultChecked className="mt-1 accent-gold h-4 w-4 rounded-md cursor-pointer" required />
          <p className="text-[10px] text-gray-400 leading-relaxed font-medium group-hover/check:text-gray-600 transition-colors">
            Tôi đồng ý nhận tài liệu và các bài học thực chiến qua email. <br/>
            <span className="text-gray-300 italic">Có thể hủy bất cứ lúc nào chỉ với 1 click.</span>
          </p>
        </label>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading || slots === 0}
          type="submit"
          className="w-full bg-[#111827] text-white font-black py-5 rounded-2xl shadow-2xl shadow-black/20 hover:bg-[#1a2332] disabled:opacity-50 transition-all flex flex-col items-center justify-center gap-1 group/btn relative overflow-hidden"
        >
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin text-gold" />
          ) : (
            <>
              <div className="flex items-center gap-2.5">
                <span className="text-base tracking-tight">GỬI FILE CHO TÔI NGAY</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </div>
              <span className="text-[9px] text-gold/80 font-bold tracking-widest opacity-0 group-hover/btn:opacity-100 transition-opacity uppercase">Nhận link qua email sau 30s</span>
            </>
          )}
          {/* Shimmer effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-shimmer"></div>
        </motion.button>

        <div className="flex items-center justify-center gap-2.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Bảo mật 100% • Không bao giờ spam</span>
        </div>
      </form>
    </motion.div>
  );
};

export default FormCard;
