import Decimal from 'decimal.js';
const money=value=>new Decimal(value).toDecimalPlaces(2,Decimal.ROUND_HALF_UP);
export function saleAmounts(quantity,unitPrice,discount=0,unitCost=0){const subtotal=money(unitPrice).mul(quantity),safeDiscount=money(discount);if(safeDiscount.isNegative()||safeDiscount.gt(subtotal))throw new RangeError('Discount must be between zero and the subtotal');return {subtotal:subtotal.toFixed(2),total:subtotal.minus(safeDiscount).toFixed(2),costTotal:money(unitCost).mul(quantity).toFixed(2)};}
export function outstandingDebt(creditSales,payments){return money(creditSales).minus(money(payments)).toFixed(2);}
