
import React from 'react';
import { motion } from 'motion/react';
import { Check, Facebook, Youtube, Video, ArrowLeft, Mail } from 'lucide-react';

interface ThankYouProps {
  onBack: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tighter text-[#111827] flex items-center gap-2"
        >
          <img 
            src="https://i.postimg.cc/GtngZLrM/nam_nho.jpg" 
            alt="Logo" 
            className="w-8 h-8 rounded-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <span>NGUYỄN NAM <span className="text-gold">BĐS</span></span>
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="text-xs font-bold text-gray-400 hover:text-gold transition-colors flex items-center gap-1 uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> QUAY LẠI
        </motion.button>
      </header>

      <main className="flex-grow flex flex-col items-center py-12 px-6">
        <div className="max-w-6xl w-full text-center space-y-12">
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-black text-[#E11D48] italic tracking-tight">ĐÃ GỬI EMAIL!</h1>
            <p className="text-xl md:text-2xl text-gray-500 italic font-medium">Hãy làm theo hướng dẫn bên dưới</p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 items-stretch">
            {[
              { 
                step: 1, 
                text: "Kiểm tra hộp thư Inbox (Chính)", 
                img: "https://i.postimg.cc/GmP1Y4KN/Bu_o_c_1.png",
                highlight: "Inbox (Chính)"
              },
              { 
                step: 2, 
                text: "Kiểm tra tab Thư rác (Spam)", 
                img: "https://i.postimg.cc/XYK0FrLt/Bu_o_c_2.png",
                highlight: "Thư rác (Spam)"
              },
              { 
                step: 3, 
                text: "BẤM \"NOT SPAM\" ĐỂ NHẬN TÀI LIỆU", 
                img: "https://i.postimg.cc/wvh1tXMV/Bu-o-c-3-new.png",
                highlight: "\"NOT SPAM\""
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-[3.5rem] shadow-soft flex flex-col items-center group border border-gray-50 hover:shadow-xl transition-all duration-500 h-full"
              >
                <div className="w-full bg-cream rounded-[2.5rem] p-6 mb-8 relative overflow-hidden flex items-center justify-center aspect-[3/4]">
                   <img 
                    src={item.img} 
                    alt={`Bước ${item.step}`} 
                    className="max-w-full max-h-full object-contain rounded-[1.5rem] group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center w-full min-h-[5rem]">
                  <p className="text-xl font-black text-gray-800 leading-tight px-2 text-center">
                    {item.step === 3 ? (
                      <>BẤM <span className="text-red-600">"NOT SPAM"</span> ĐỂ NHẬN TÀI LIỆU</>
                    ) : (
                      <>Kiểm tra {item.step === 1 ? "hộp thư" : "tab"} <span className="text-red-600">{item.highlight}</span></>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Instructions Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-soft text-left border border-gray-100 max-w-3xl mx-auto space-y-8"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg shadow-lg shadow-blue-200">1</div>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">
                  Kiểm tra hộp thư <span className="font-black">Inbox (Hộp thư đến)</span> hoặc tab <span className="font-black">Promotions (Quảng cáo)</span>.
                </p>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg shadow-lg shadow-blue-200">2</div>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">
                  Nếu không thấy, vui lòng kiểm tra mục <span className="font-black">Spam (Thư rác)</span>.
                </p>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-[#E11D48] text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg shadow-lg shadow-red-200">3</div>
                <div className="space-y-2">
                  <p className="text-lg font-black text-[#E11D48] uppercase tracking-tight">QUAN TRỌNG:</p>
                  <p className="text-lg font-medium text-gray-700 leading-relaxed">
                    Nếu mail nằm trong Spam, hãy bấm nút <span className="font-black">"Report not spam"</span> để đảm bảo bạn nhận được tài liệu từ Nguyễn Nam.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Info */}
          <div className="space-y-12 pb-12">
            <p className="text-gray-400 italic font-medium text-lg">
              * Email tự động có thể mất 30s để đến hộp thư của bạn.
            </p>

            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-all font-black text-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Quay lại trang chính
            </button>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-gray-300 font-bold uppercase tracking-[0.3em] text-[10px]">
                <Check className="w-3 h-3" /> BẢO MẬT & HỖ TRỢ 24/7
              </div>
              
              <div className="flex justify-center gap-8">
                <a href="https://www.facebook.com/namtuyendungbds/" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="https://www.youtube.com/channel/UCyX8IefNC42CONw7QAaVl7w" target="_blank" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-6 h-6" /></a>
                <a href="https://www.tiktok.com/@namtuyendung" target="_blank" className="text-gray-400 hover:text-black transition-colors"><Video className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-white border-t border-gray-50 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">NGUYỄN NAM BĐS</p>
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">© 2026 Nguyễn Nam BĐS. Bảo lưu mọi quyền.</p>
      </footer>
    </div>
  );
};

export default ThankYou;
