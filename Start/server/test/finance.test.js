import test from 'node:test'; import assert from 'node:assert/strict'; import {saleAmounts,outstandingDebt} from '../src/finance.js';
test('sale totals are decimal-safe and deterministic',()=>assert.deepEqual(saleAmounts(3,1500,50,900),{subtotal:'4500.00',total:'4450.00',costTotal:'2700.00'}));
test('discount cannot exceed subtotal',()=>assert.throws(()=>saleAmounts(1,100,101),RangeError));
test('debt reduces after payment',()=>assert.equal(outstandingDebt(15000,5000),'10000.00'));
test('money avoids float artifacts',()=>assert.equal(saleAmounts(3,'0.10',0,'0.03').total,'0.30'));
