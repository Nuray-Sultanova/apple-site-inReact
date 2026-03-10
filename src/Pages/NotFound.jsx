import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[120px] md:text-[160px] font-semibold text-[#1d1d1f] leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1d1d1f] mt-4">
          Axtardığınız səhifə tapılmadı.
        </h2>
        <p className="text-[#86868b] text-lg mt-6 max-w-md mx-auto">
          İstədiyiniz məzmun mövcud deyil və ya başqa ünvana köçürülüb.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="bg-[#0071e3] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Ana səhifəyə qayıt
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
