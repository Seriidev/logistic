import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function ShippingProcess() {
  const navigate = useNavigate();

  const handleSendParcel = () => {
    if (!isAuthenticated()) {
      navigate("/signup?redirect=/create-shipment");
      return;
    }
    navigate("/create-shipment");
  };

  return (
    <section className="py-10 sm:py-16 bg-white min-w-0">
      <div className="page-container">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 uppercase tracking-wide mb-3 sm:mb-4">
            HOW DOES THIS WORK
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Step-by-step shipping process — clear, fast, and convenient.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-8">
          {/* Step 01 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 left-8  bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
              01
            </div>
            
            <div className="flex justify-center mb-6 mt-4">
              <img 
                src="./steps icon/calc icon.png" 
                alt="Calculate" 
                className="h-24 w-auto"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">Calculate</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Fill out a quick online form — easy and fast.
            </p>
          </div>


          {/* Step 02 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 left-8  bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
              02
            </div>
            
            <div className="flex justify-center mb-6 mt-4">
              <img 
                src="./steps icon/truck icon.png" 
                alt="We pick it up" 
                className="h-24 w-auto"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">We pick it up</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Courier pickup or drop-off point — your choice.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 left-8  bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
              03
            </div>
            
            <div className="flex justify-center mb-6 mt-4">
              <img 
                src="./steps icon/packet.png" 
                alt="Pack and store" 
                className="h-24 w-auto"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">Pack and store</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Secure packing and prep for shipping.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow relative lg:col-span-1">
            <div className="absolute -top-4 left-8  bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
              04
            </div>
            
            <div className="flex justify-center mb-6 mt-4">
              <img 
                src="./steps icon/air icon.png" 
                alt="Delivery" 
                className="h-24 w-auto"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">Delivery</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Fast delivery with tracking — worldwide service.
            </p>
          </div>
          
          {/* Step 04 */}
          <div className="bg-blue-500 border border-gray-200 rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-shadow relative lg:col-span-1">            
            <div className="flex justify-center mb-6 mt-4">
              <img 
                src="./steps icon/parcel.png" 
                alt="Delivery" 
                className="h-20 w-auto"
              />
            </div>

            <h3 className="text-xl text-white font-semibold text-center mb-2">Send a parcel</h3>
            <p className="text-white text-center text-sm leading-relaxed">
              Fast and secure delivery
            </p>
            <button
              type="button"
              onClick={handleSendParcel}
              className="w-full bg-white text-[#1E3A8A] font-semibold py-3 rounded-full hover:bg-blue-50 transition-colors mt-4 border-none cursor-pointer font-[inherit]"
            >
              Send
            </button>
          </div>
          {/* Right side card - Send a parcel */}
{/*           
          <div className=" bg-blue-500 text-white rounded-2xl p-8 w-full max-w-[320px] relative overflow-hidden">
            <div className="flex justify-end ">
              <img 
                src="./steps icon/parcel icon.png" 
                alt="Parcel" 
                className="h-20 w-auto"
              />
        

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Send a parcel</h3>
              <p className="text-blue-200 text-sm">Fast and secure delivery</p>
              
               <button className="w-full bg-white text-[#1E3A8A] font-semibold py-3 rounded-full hover:bg-blue-50 transition-colors mt-12">
                 SEND
               </button>
            </div>
          </div>
            {/* Декоративная дуга *
            <div className="absolute -bottom-5 -right-6 w-32 h-32 border-8 border-white/20 rounded-full"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}