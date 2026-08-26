-- Application user should not own tables in production; FORCE RLS prevents owner bypass.
ALTER TABLE businesses FORCE ROW LEVEL SECURITY; ALTER TABLE business_members FORCE ROW LEVEL SECURITY; ALTER TABLE customers FORCE ROW LEVEL SECURITY; ALTER TABLE suppliers FORCE ROW LEVEL SECURITY; ALTER TABLE products FORCE ROW LEVEL SECURITY; ALTER TABLE sales FORCE ROW LEVEL SECURITY; ALTER TABLE sale_items FORCE ROW LEVEL SECURITY; ALTER TABLE inventory_movements FORCE ROW LEVEL SECURITY; ALTER TABLE expenses FORCE ROW LEVEL SECURITY; ALTER TABLE payments FORCE ROW LEVEL SECURITY; ALTER TABLE audit_logs FORCE ROW LEVEL SECURITY;
-- Bootstrap is deliberately narrow: an authenticated user can create a business and
-- their own owner membership. No API endpoint exposes arbitrary membership creation.
CREATE POLICY business_create ON businesses FOR INSERT WITH CHECK (true);
CREATE POLICY owner_membership_bootstrap ON business_members FOR INSERT WITH CHECK (user_id::text=current_setting('app.user_id',true) AND role='owner');
CREATE POLICY audit_insert ON audit_logs FOR INSERT WITH CHECK (is_business_member(business_id));
