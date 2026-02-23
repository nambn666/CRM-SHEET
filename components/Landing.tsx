
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Info, Facebook, Youtube, Video, ChevronRight, Star, Download } from 'lucide-react';
import FormCard from './FormCard';
import FAQItem from './FAQItem';

interface LandingProps {
  onSuccess: () => void;
}

const Landing: React.FC<LandingProps> = ({ onSuccess }) => {
  const [slots, setSlots] = useState(5);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('form-top')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Navbar */}
      <header className="py-6 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black tracking-tighter text-[#111827]"
        >
          NGUYỄN NAM <span className="text-gold">BĐS</span>
        </motion.div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 text-gold border border-gold/20 rounded-full text-xs font-bold uppercase tracking-widest">
                <Star className="w-3 h-3 fill-gold" /> Quà tặng thực chiến cho môi giới
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-[#111827]">
                CRM Sheet – Quản Lý Data Khách Hàng <br/>
                <span className="text-gold italic font-serif">giúp bạn biết khách nào chuẩn bị cọc</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                Dành cho môi giới đa phân khúc: gom data về một chỗ, phân tầng rõ ràng, không còn “lọt khách” khi tư vấn.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Phễu 6 tầng từ 'Chưa tư vấn' → 'Cọc'",
                  "Nhìn vào là biết khách nét ở đâu",
                  "Không sót khách, không trùng lặp",
                  "Dễ dùng cho cá nhân & leader",
                  "Hướng dẫn sử dụng từng bước"
                ].map((bullet, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700 font-semibold text-sm">{bullet}</span>
                  </motion.div>
                ))}
              </div>

              {/* Visual Mockup Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 bg-white p-6 rounded-[2rem] shadow-soft border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 4h7v5h5v11H6V4z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">CRM Sheet – Quản Lý Data Khách Hàng</h3>
                    <p className="text-xs text-gray-400 font-medium">Google Sheet Template • Ver 2.0</p>
                  </div>
                </div>
                <div className="space-y-3 opacity-60">
                  <div className="h-4 w-full bg-gray-100 rounded-full"></div>
                  <div className="h-4 w-3/4 bg-gray-100 rounded-full"></div>
                  <div className="h-4 w-1/2 bg-gray-50 rounded-full"></div>
                </div>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-bold">CHUẨN BỊ CỌC</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-[10px] font-bold">ĐÃ ĐI DỰ ÁN</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold">MỚI</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              id="form-top" 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-12"
            >
              <FormCard slots={slots} onSuccess={onSuccess} />
            </motion.div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Trong file này có gì?</h2>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-sm italic">Cấu trúc phễu 6 tầng chuẩn thực chiến</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "CHƯA TƯ VẤN", desc: "Khách mới đổ về, chưa gọi điện/nhắn tin lần nào.", color: "bg-slate-500 text-slate-700", light: "bg-slate-50" },
                { title: "ĐÃ ĐỒNG Ý KẾT BẠN", desc: "Đã tư vấn sơ bộ, đã kết nối Zalo thành công.", color: "bg-blue-500 text-blue-700", light: "bg-blue-50" },
                { title: "TƯƠNG TÁC SẢN PHẨM", desc: "Đang hỏi giá, mặt bằng, tiến độ dự án.", color: "bg-cyan-500 text-cyan-700", light: "bg-cyan-50" },
                { title: "ĐÃ GẶP TRỰC TIẾP", desc: "Đã cafe hoặc tư vấn trực tiếp tại nhà khách.", color: "bg-emerald-500 text-emerald-700", light: "bg-emerald-50" },
                { title: "ĐÃ ĐI DỰ ÁN", desc: "Khách đã xem nhà mẫu, sa bàn hoặc thực tế dự án.", color: "bg-orange-500 text-orange-700", light: "bg-orange-50" },
                { title: "CHUẨN BỊ CỌC", desc: "Khách chuẩn bị xuống tiền, đang chốt căn.", color: "bg-red-500 text-red-700", light: "bg-red-50" },
              ].map((item, i) => (
                <div key={i} className={`group p-8 rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.light}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg italic text-white shadow-lg ${item.color.split(' ')[0]}`}>
                      {i+1}
                    </div>
                    <h4 className={`font-black text-base tracking-tight ${item.color.split(' ')[1]}`}>{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 bg-[#111827] text-white rounded-[3rem] overflow-hidden relative">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
                  <h5 className="font-bold">Copy file về Drive</h5>
                  <p className="text-xs text-gray-400">(Make a copy)</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
                  <h5 className="font-bold">Nhập khách vào "Chưa tư vấn"</h5>
                  <p className="text-xs text-gray-400">Ghi rõ nguồn & nhu cầu</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
                  <h5 className="font-bold">Cập nhật trạng thái chăm sóc</h5>
                  <p className="text-xs text-gray-400">Theo sát 6 tầng phễu</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </section>

        {/* Qualification Section */}
        <section className="py-24 bg-cream px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/50 p-10 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl shadow-emerald-900/5">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-emerald-700">
                <CheckCircle className="text-emerald-500 w-6 h-6" /> Phù hợp nếu bạn là:
              </h3>
              <ul className="space-y-5 text-emerald-900/70 font-bold">
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" /> Môi giới mới chưa có hệ thống quản data</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" /> Đang có nhiều data nhưng follow-up rối</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" /> Muốn biết khách nét để ưu tiên lịch hẹn</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" /> Leader cần chuẩn hóa phễu cho đội</li>
              </ul>
            </div>
            <div className="p-10 rounded-[2.5rem] border border-dashed border-gray-200 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-3 text-gray-400">
                <Info className="w-5 h-5" /> Chưa phù hợp nếu:
              </h3>
              <ul className="space-y-5 text-gray-400 font-medium text-sm">
                <li className="flex items-start gap-2"><span>•</span> Chỉ muốn lướt cho vui, không áp dụng</li>
                <li className="flex items-start gap-2"><span>•</span> Đang tìm kiếm một phần mềm CRM tự động</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-24 bg-white px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-6xl font-black text-gold mb-4 italic">500+</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Anh em môi giới đang áp dụng</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { quote: "Dùng 1 tuần là đỡ sót khách hẳn. Biết khách nào cần ưu tiên.", name: "Anh Minh - Broker Quận 2" },
                { quote: "Nhìn phễu biết khách nào cần hẹn gặp ngay. Rất thực tế.", name: "Chị Lan - Sale Vinhomes" },
                { quote: "Quản lý đội nhóm dễ hơn hẳn vì ai cũng chung một chuẩn.", name: "Nam Trần - Team Leader" }
              ].map((testi, i) => (
                <div key={i} className="p-8 bg-cream rounded-3xl relative">
                  <p className="text-gray-600 italic mb-4 font-medium">"{testi.quote}"</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{testi.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-cream px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="relative group">
              <img 
                src="https://i.postimg.cc/GtngZLrM/nam_nho.jpg" 
                alt="Nguyễn Nam BĐS" 
                className="w-72 h-72 md:w-80 md:h-80 rounded-[3rem] object-cover shadow-2xl border-4 border-white transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-white p-4 rounded-2xl shadow-lg">
                <p className="text-xs font-black">BROKER</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-black">Về Nguyễn Nam BĐS</h3>
              <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                <p>Tôi là Nguyễn Nam (môi giới/leader) – người đam mê chia sẻ các công cụ thực chiến giúp anh em đồng nghiệp.</p>
                <p>Mục tiêu của tôi là giúp cộng đồng môi giới làm nghề nhẹ nhàng hơn nhưng mang lại hiệu quả cao hơn thông qua hệ thống hóa.</p>
                <p>Tôi sẽ gửi thêm các tip thực chiến 2-3 lần/tuần qua email. Bạn hoàn toàn có thể hủy đăng ký bất cứ lúc nào.</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/namtuyendungbds/" target="_blank" className="p-3 bg-white rounded-xl hover:text-blue-600 shadow-sm transition-all"><Facebook /></a>
                <a href="https://www.youtube.com/channel/UCyX8IefNC42CONw7QAaVl7w" target="_blank" className="p-3 bg-white rounded-xl hover:text-red-600 shadow-sm transition-all"><Youtube /></a>
                <a href="https://www.tiktok.com/@namtuyendung" target="_blank" className="p-3 bg-white rounded-xl hover:text-black shadow-sm transition-all"><Video /></a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-16">Câu hỏi thường gặp</h2>
            <div className="space-y-2">
              <FAQItem question="Tôi nhận file bằng cách nào?" answer="Sau khi điền form, một email chứa link Google Sheet sẽ được gửi ngay lập tức tới hòm thư của bạn. Hãy kiểm tra cả hộp thư chính và tab Quảng cáo." />
              <FAQItem question="File có mất phí không?" answer="Tài liệu này hoàn toàn miễn phí. Đây là quà tặng hỗ trợ cộng đồng từ Nguyễn Nam BĐS." />
              <FAQItem question="Môi giới mới có dùng được không?" answer="Rất phù hợp. Nó giúp bạn hình thành tư duy quản lý phễu khách hàng chuyên nghiệp ngay từ những ngày đầu vào nghề." />
              <FAQItem question="Có hướng dẫn sử dụng không?" answer="Có, trong file có tab 'Hướng dẫn' chi tiết 3 bước để bạn bắt đầu ngay lập tức." />
              <FAQItem question="Tôi dùng trên điện thoại được không?" answer="Được. Bạn chỉ cần tải ứng dụng Google Sheets trên App Store hoặc Google Play là có thể cập nhật data mọi lúc mọi nơi." />
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-gold/5 px-6 text-center border-t border-gold/10">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black">Bắt đầu chuẩn hóa data ngay hôm nay?</h2>
            <button 
              onClick={scrollToForm}
              className="bg-gold text-white px-12 py-5 rounded-2xl font-black text-lg shadow-gold-soft hover:scale-105 active:scale-95 transition-all"
            >
              NHẬN MẪU GOOGLE SHEET MIỄN PHÍ →
            </button>
            <p className="text-sm text-gray-400 font-medium">
              Không spam. Bảo mật thông tin tuyệt đối. <br/>
              Link file gửi qua email sau khi đăng ký.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-white border-t border-gray-100 px-6 text-center">
        <p className="text-sm font-bold text-gray-300 tracking-tighter uppercase">© 2024 NGUYỄN NAM BĐS • LUXURY MINIMAL LANDING PAGE</p>
      </footer>

      {/* Sticky Floating CTA */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-xs px-4 ${
          showSticky ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToForm}
          className="w-full bg-gold text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all border-2 border-white/20"
        >
          <Download className="w-5 h-5" />
          <span>TẢI VỀ MIỄN PHÍ NGAY</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
