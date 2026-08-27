import { formatCurrency } from "../../lib/utils";

interface FundingAmountProps {
  min: number;
  max: number;
}

export default function FundingAmount({ min, max }: FundingAmountProps) {
  return (
    <span className="funding-amount">
      {formatCurrency(min)} &ndash; {formatCurrency(max)}
    </span>
  );
}
