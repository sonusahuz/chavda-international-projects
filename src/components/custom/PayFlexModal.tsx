import { Check, X } from 'lucide-react';

export function PayFlexModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="modal-overlay lg:h-screen" onClick={onClose}>
        <div
          className="modal-content max-w-[90%] max-h-[90vh] 
      md:max-w-none md:max-h-screen md:w-auto md:h-auto
      overflow-y-auto"
        >
          <div>
            <X
              onClick={onClose}
              className="absolute top-0 right-0 cursor-pointer bg-green-600 p-2 text-white rounded-bl-2xl"
              size={32}
            />
          </div>
          <div className="modal-body">
            <div className="max-w-4xl mx-auto p-1 space-y-4">
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-2">
                  <img
                    className="w-28"
                    src="https://widgets.payflex.co.za/assets/widget-payflex.svg"
                  />
                </div>
                <div className="text-right">
                  <div className="text-navy-900 font-bold">
                    NO INTEREST. NO FEES.
                  </div>
                  <div className="text-violet-400">THIS IS SHOPPING.</div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                {/* Section 1 */}
                <div className="flex gap-8 items-start">
                  <span className="text-navy-900 text-3xl font-bold">1</span>
                  <div>
                    <h2 className="text-violet-400 text-2xl mb-1">
                      SELECT YOUR PAYMENT PLAN
                    </h2>
                    <p className="text-navy-900 text-xl font-bold">
                      3 OR 4 INSTALMENTS
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="flex gap-8 items-start">
                  <span className="text-navy-900 text-3xl font-bold">2</span>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-violet-400 text-2xl mb-1">
                        PAY IN 3
                      </h3>
                      <p className="text-navy-900 text-xl font-bold">
                        PAY OVER 3 PAYDAYS
                      </p>
                      <p className="text-navy-900 text-xl font-bold">
                        INTEREST FREE
                      </p>
                    </div>

                    <div className="text-navy-900 text-xl font-bold">OR</div>

                    <div>
                      <h3 className="text-violet-400 text-2xl mb-1">
                        PAY IN 4
                      </h3>
                      <p className="text-navy-900 text-xl font-bold">
                        PAY IN 4 INSTALMENTS OVER 6 WEEKS
                      </p>
                      <p className="text-navy-900 text-xl font-bold">
                        INTEREST FREE
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="flex gap-8 items-start">
                  <span className="text-navy-900 text-3xl font-bold">3</span>
                  <div>
                    <h2 className="text-violet-400 text-2xl mb-1">
                      FLEX! GET APPROVED
                    </h2>
                    <p className="text-navy-900 text-xl font-bold">
                      PAY YOUR FIRST INSTALLMENT TODAY AND GET
                    </p>
                    <p className="text-navy-900 text-xl font-bold">
                      WHAT YOU WANT NOW
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Requirements */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-navy-900" />
                    <span className="text-navy-900 font-medium">
                      You must be over 18 years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-navy-900" />
                    <span className="text-navy-900 font-medium">
                      You must have a valid South African ID
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-navy-900" />
                    <span className="text-navy-900 font-medium">
                      You must have a debit/credit card issued by Mastercard,
                      Visa or Amex
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
