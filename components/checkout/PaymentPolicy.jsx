import { TruckIcon } from "@heroicons/react/outline";
import BookContainer from "../book-listing/BookContainer";

const PaymentPolicy = () => {
  return (
    <BookContainer>
      <div className="space-y-5 md:space-y-6">
        <h2 className="font-semibold capitalize">Payment Policy</h2>
        <div className="flex items-center gap-3">
          <TruckIcon className="w-12 min-w-[3rem] text-primary" />
          <p className="text-sm text-[#959595]">
            Your booking won't be confirmed until the partner confirms your request (Usually within 24hrs), upon which
            funds would be deducted from your account.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <TruckIcon className="w-12 min-w-[3rem] text-primary" />
          <p className="text-sm text-[#959595]">
            You wll be given a full refund minus a £20 cancellation fee if your booking is cancelled by 25th of August.{" "}
            <a href="#" className="inline-flex text-primary">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </BookContainer>
  );
};

export default PaymentPolicy;
